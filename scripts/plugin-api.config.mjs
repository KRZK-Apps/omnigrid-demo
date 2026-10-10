export const plugins = [
    {
        name: "pagination",
        exportName: "PAGINATION_API",
        inputs: ["omnigrid/plugins/base/pagination/src/index.ts"],
        optionsInterface: "PaginationPluginOptions",
        className: "PaginationPlugin",
        output: "omnigrid-demo/src/generated/pagination-api.ts",
    },
    {
        name: "selection",
        exportName: "SELECTION_API",
        inputs: ["omnigrid/plugins/base/selection/src/index.ts"],
        optionsInterface: "SelectionPluginOptions",
        className: "SelectionPlugin",
        output: "omnigrid-demo/src/generated/selection-api.ts",
    },
    {
        name: "sorting",
        exportName: "SORTING_API",
        inputs: [
            "omnigrid/plugins/base/sorting/src/types.ts",
            "omnigrid/plugins/base/sorting/src/index.ts",
        ],
        optionsInterface: "SortingPluginOptions",
        className: "SortingPlugin",
        output: "omnigrid-demo/src/generated/sorting-api.ts",
    },
    {
        name: "resize",
        exportName: "RESIZE_API",
        inputs: [
            "omnigrid/plugins/base/resize/src/index.ts",
        ],
        optionsInterface: "ColumnResizePluginOptions",
        className: "ColumnResizePlugin",
        output: "omnigrid-demo/src/generated/resize-api.ts",
    },
];
