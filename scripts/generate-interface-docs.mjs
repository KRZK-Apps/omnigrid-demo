import { Project, SyntaxKind } from "ts-morph";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";
import { interfaces } from "./interface-api.config.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceDirectory = path.resolve(scriptDirectory, "../..");

function getDescription(node) {
    return node
        .getJsDocs()
        .map((doc) => doc.getDescription().trim())
        .filter(Boolean)
        .join("\n\n")
        .replace(/\r\n/g, "\n");
}

function findTypeDeclaration(name, sourceFiles) {
    return sourceFiles
        .flatMap((sourceFile) => [
            ...sourceFile.getInterfaces(),
            ...sourceFile.getTypeAliases(),
        ])
        .find((declaration) => declaration.getName() === name);
}

function getTypeDeclarations(declaration, sourceFiles, seen = new Set()) {
    const key = `${declaration.getSourceFile().getFilePath()}:${declaration.getName()}`;
    if (seen.has(key)) return [];
    seen.add(key);

    if (declaration.getKind() === SyntaxKind.InterfaceDeclaration) {
        const inherited = declaration.getExtends().flatMap((heritage) => {
            const parent = findTypeDeclaration(heritage.getExpression().getText(), sourceFiles);
            return parent ? getTypeDeclarations(parent, sourceFiles, seen) : [];
        });
        return [...inherited, declaration];
    }

    const typeNode = declaration.getTypeNode();
    if (!typeNode) return [];

    const kind = typeNode.getKind();
    if (kind === SyntaxKind.UnionType || kind === SyntaxKind.IntersectionType) {
        return typeNode.getTypeNodes().flatMap((part) => getTypeDeclarationsFromNode(part, sourceFiles, seen));
    }

    return getTypeDeclarationsFromNode(typeNode, sourceFiles, seen);
}

function getTypeDeclarationsFromNode(typeNode, sourceFiles, seen) {
    const kind = typeNode.getKind();
    if (kind === SyntaxKind.ParenthesizedType) {
        return getTypeDeclarationsFromNode(typeNode.getTypeNode(), sourceFiles, seen);
    }
    if (kind === SyntaxKind.UnionType || kind === SyntaxKind.IntersectionType) {
        return typeNode.getTypeNodes().flatMap((part) => getTypeDeclarationsFromNode(part, sourceFiles, seen));
    }
    if (kind === SyntaxKind.TypeLiteral) return [typeNode];
    if (kind !== SyntaxKind.TypeReference) return [];

    const referenced = findTypeDeclaration(typeNode.getTypeName().getText(), sourceFiles);
    return referenced ? getTypeDeclarations(referenced, sourceFiles, seen) : [];
}

function getPropertyDetails(property, sourcePaths) {
    const typeNode = property.getTypeNode();
    if (!typeNode) {
        throw new Error(`Missing explicit type for property ${property.getName()} in ${sourcePaths.join(", ")}`);
    }

    return {
        name: `${property.getName()}${property.hasQuestionToken() ? "?" : ""}`,
        type: typeNode.getText(),
        description: getDescription(property),
    };
}

function getAllProperties(declarations) {
    return declarations.flatMap((declaration) => declaration.getProperties());
}

function mergeProperties(properties, sourcePaths) {
    const merged = new Map();
    for (const property of properties) {
        const details = getPropertyDetails(property, sourcePaths);
        const existing = merged.get(property.getName());
        if (!existing) {
            merged.set(property.getName(), details);
            continue;
        }

        const types = new Set([...existing.type.split(" | "), ...details.type.split(" | ")]);
        existing.type = [...types].join(" | ");
        if (details.description && !existing.description.split("\n\n").includes(details.description)) {
            existing.description = [existing.description, details.description].filter(Boolean).join("\n\n");
        }
        if (existing.name.endsWith("?") && !details.name.endsWith("?")) {
            existing.name = property.getName();
        }
    }
    return [...merged.values()];
}

async function generateInterfaceDocs(config) {
    if (!config.exportName || !config.inputs?.length || !config.interface || !config.output) {
        throw new Error(`Invalid interface documentation config: ${JSON.stringify(config)}`);
    }

    const sourcePaths = config.inputs.map((input) => path.resolve(workspaceDirectory, input));
    const project = new Project({ skipAddingFilesFromTsConfig: true });
    const sourceFiles = sourcePaths.map((sourcePath) => project.addSourceFileAtPath(sourcePath));
    const declaration = findTypeDeclaration(config.interface, sourceFiles);
    if (!declaration) {
        throw new Error(`${config.interface} was not found in inputs for interface documentation`);
    }

    const declarations = getTypeDeclarations(declaration, sourceFiles);
    const properties = mergeProperties(getAllProperties(declarations), sourcePaths);
    if (properties.length === 0) {
        throw new Error(`No properties were found for ${config.interface}`);
    }

    const api = {
        name: config.interface,
        description: getDescription(declaration),
        source: declaration.getText().replace(/\r\n/g, "\n"),
        properties,
    };
    const outputPath = path.resolve(workspaceDirectory, config.output);
    const generated = `// This file is generated by scripts/generate-interface-docs.mjs. Do not edit it directly.\nexport const ${config.exportName} = ${JSON.stringify(api, null, 4)};\n`;
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, generated, "utf8");
    console.log(`Generated ${config.interface} API documentation at ${path.relative(workspaceDirectory, outputPath)}`);
}

for (const declaration of interfaces) {
    await generateInterfaceDocs(declaration);
}
