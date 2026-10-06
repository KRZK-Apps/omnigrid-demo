import { Project } from "ts-morph";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";
import { plugins } from "./plugin-api.config.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceDirectory = path.resolve(scriptDirectory, "../..");

function getDescription(node, label, sourcePaths) {
    const description = node
        .getJsDocs()
        .map((doc) => doc.getDescription().trim())
        .filter(Boolean)
        .join("\n\n")
        .replace(/\r\n/g, "\n");

    if (!description) {
        throw new Error(`Missing documentation comment for ${label} in ${sourcePaths.join(", ")}`);
    }

    return description;
}

function getDefaultValue(node) {
    for (const doc of node.getJsDocs()) {
        const defaultTag = doc.getTags().find((tag) => tag.getTagName() === "default");
        const value = defaultTag?.getCommentText()?.trim();
        if (value) return value;
    }
    return undefined;
}

function getPropertyDetails(property, sourcePaths) {
    const typeNode = property.getTypeNode();
    if (!typeNode) {
        throw new Error(`Missing explicit type for option ${property.getName()} in ${sourcePaths.join(", ")}`);
    }

    return {
        name: property.getName(),
        type: typeNode.getText(),
        defaultValue: getDefaultValue(property),
        description: getDescription(property, `option ${property.getName()}`, sourcePaths),
    };
}

function isCallbackProperty(property, sourceFiles, seenAliases = new Set()) {
    return isCallbackTypeNode(property.getTypeNode(), sourceFiles, seenAliases);
}

function isCallbackTypeNode(typeNode, sourceFiles, seenAliases) {
    if (!typeNode) return false;
    const kind = typeNode.getKindName();
    if (kind === "FunctionType") return true;
    if (kind === "ParenthesizedType") {
        return isCallbackTypeNode(typeNode.getTypeNode(), sourceFiles, seenAliases);
    }
    if (kind === "UnionType" || kind === "IntersectionType") {
        return typeNode.getTypeNodes().some((part) => isCallbackTypeNode(part, sourceFiles, seenAliases));
    }
    if (kind === "TypeReference") {
        const aliasName = typeNode.getTypeName().getText();
        if (seenAliases.has(aliasName)) return false;
        seenAliases.add(aliasName);
        const alias = sourceFiles
            .flatMap((sourceFile) => sourceFile.getTypeAliases())
            .find((declaration) => declaration.getName() === aliasName);
        return alias ? isCallbackTypeNode(alias.getTypeNode(), sourceFiles, seenAliases) : false;
    }
    return false;
}

function getMethodDetails(method, sourcePaths) {
    const parameters = method.getParameters().map((parameter) => {
        const optional = parameter.isOptional() || parameter.hasInitializer() ? "?" : "";
        const rest = parameter.isRestParameter() ? "..." : "";
        return `${rest}${parameter.getName()}${optional}`;
    });
    const returnType = method.getReturnTypeNode()?.getText() ?? method.getReturnType().getText(method);

    return {
        name: `${method.getName()}(${parameters.join(", ")})`,
        type: returnType,
        description: getDescription(method, `public API method ${method.getName()}`, sourcePaths),
    };
}

async function generatePluginDocs(config) {
    if (!config.name || !config.exportName || !config.inputs?.length || !config.optionsInterface || !config.className || !config.output) {
        throw new Error(`Invalid plugin documentation config: ${JSON.stringify(config)}`);
    }

    const sourcePaths = config.inputs.map((input) => path.resolve(workspaceDirectory, input));
    const project = new Project({ skipAddingFilesFromTsConfig: true });
    const sourceFiles = sourcePaths.map((sourcePath) => project.addSourceFileAtPath(sourcePath));
    const optionsInterface = sourceFiles
        .flatMap((sourceFile) => sourceFile.getInterfaces())
        .find((declaration) => declaration.getName() === config.optionsInterface);
    if (!optionsInterface) {
        throw new Error(`${config.optionsInterface} was not found in inputs for ${config.name}`);
    }

    const optionProperties = optionsInterface.getProperties();
    const callbacks = optionProperties
        .filter((property) => isCallbackProperty(property, sourceFiles))
        .map((property) => getPropertyDetails(property, sourcePaths));
    const options = optionProperties
        .filter((property) => !isCallbackProperty(property, sourceFiles))
        .map((property) => getPropertyDetails(property, sourcePaths));
    const types = sourceFiles
        .flatMap((sourceFile) => [
            ...sourceFile.getInterfaces().filter((declaration) => declaration.isExported()),
            ...sourceFile.getTypeAliases().filter((declaration) => declaration.isExported()),
        ])
        .filter((declaration) => declaration.getName() !== config.optionsInterface)
        .sort((left, right) => {
            const fileOrder = sourcePaths.indexOf(left.getSourceFile().getFilePath()) -
                sourcePaths.indexOf(right.getSourceFile().getFilePath());
            return fileOrder || left.getStart() - right.getStart();
        })
        .map((declaration) => ({
            name: declaration.getName(),
            source: declaration.getText().replace(/^export\s+/, "").replace(/\r\n/g, "\n"),
            description: getDescription(declaration, `type ${declaration.getName()}`, sourcePaths),
        }));

    const pluginClass = sourceFiles
        .flatMap((sourceFile) => sourceFile.getClasses())
        .find((declaration) => declaration.getName() === config.className);
    if (!pluginClass) {
        throw new Error(`${config.className} was not found in inputs for ${config.name}`);
    }

    const methods = pluginClass
        .getMethods()
        .filter((method) => method.getJsDocs().some((doc) => doc.getTags().some((tag) => tag.getTagName() === "api")))
        .map((method) => getMethodDetails(method, sourcePaths));
    if (methods.length === 0) {
        throw new Error(`No methods tagged with @api were found for ${config.name}`);
    }

    const outputPath = path.resolve(workspaceDirectory, config.output);
    const generated = `// This file is generated by scripts/generate-plugin-docs.mjs. Do not edit it directly.\nexport const ${config.exportName} = ${JSON.stringify({ options, callbacks, methods, types }, null, 4)};\n`;
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, generated, "utf8");
    console.log(`Generated ${config.name} API documentation at ${path.relative(workspaceDirectory, outputPath)}`);
}

for (const plugin of plugins) {
    await generatePluginDocs(plugin);
}
