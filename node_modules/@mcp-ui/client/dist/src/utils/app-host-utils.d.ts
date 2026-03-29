import { Client } from '@modelcontextprotocol/sdk/client/index.js';

export declare function setupSandboxProxyIframe(sandboxProxyUrl: URL): Promise<{
    iframe: HTMLIFrameElement;
    onReady: Promise<void>;
}>;
export type ToolUiResourceInfo = {
    uri: string;
};
export declare function getToolUiResourceUri(client: Client, toolName: string): Promise<ToolUiResourceInfo | null>;
export declare function readToolUiResourceHtml(client: Client, opts: {
    uri: string;
}): Promise<string>;
//# sourceMappingURL=app-host-utils.d.ts.map