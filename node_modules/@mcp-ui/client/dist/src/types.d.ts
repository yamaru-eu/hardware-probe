export declare const UIMetadataKey: {
    readonly PREFERRED_FRAME_SIZE: "preferred-frame-size";
    readonly INITIAL_RENDER_DATA: "initial-render-data";
};
export declare const UI_METADATA_PREFIX = "mcpui.dev/ui-";
export type UIResourceMetadata = {
    [UIMetadataKey.PREFERRED_FRAME_SIZE]?: [string, string];
    [UIMetadataKey.INITIAL_RENDER_DATA]?: Record<string, unknown>;
};
//# sourceMappingURL=types.d.ts.map