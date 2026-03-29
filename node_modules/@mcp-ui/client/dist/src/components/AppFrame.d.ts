import { CallToolResult, Implementation } from '@modelcontextprotocol/sdk/types.js';
import { AppBridge, McpUiSizeChangedNotification, McpUiResourceCsp, McpUiAppCapabilities } from '@modelcontextprotocol/ext-apps/app-bridge';

/**
 * Information about the guest app, available after initialization.
 */
export interface AppInfo {
    /** Guest app's name and version */
    appVersion?: Implementation;
    /** Guest app's declared capabilities */
    appCapabilities?: McpUiAppCapabilities;
}
/**
 * Sandbox configuration for the iframe.
 */
export interface SandboxConfig {
    /** URL to the sandbox proxy HTML */
    url: URL;
    /** Override iframe sandbox attribute (default: "allow-scripts allow-same-origin allow-forms") */
    permissions?: string;
    /**
     * CSP metadata for the sandbox.
     *
     * This CSP is passed to the sandbox proxy in two ways:
     * 1. Via URL query parameter (`?csp=<json>`) - allows servers that support it to set
     *    CSP via HTTP headers (tamper-proof, recommended)
     * 2. Via postMessage after sandbox loads - fallback for proxies that don't parse query params
     *
     * For maximum security, use a proxy server that reads the `csp` query parameter and sets
     * Content-Security-Policy HTTP headers accordingly.
     *
     * @see https://github.com/modelcontextprotocol/ext-apps/pull/234
     */
    csp?: McpUiResourceCsp;
}
/**
 * Props for the AppFrame component.
 */
export interface AppFrameProps {
    /** Pre-fetched HTML content to render in the sandbox */
    html: string;
    /** Sandbox configuration */
    sandbox: SandboxConfig;
    /** Pre-configured AppBridge for MCP communication (required) */
    appBridge: AppBridge;
    /** Callback when guest reports size change */
    onSizeChanged?: (params: McpUiSizeChangedNotification['params']) => void;
    /** Callback when app initialization completes, with app info */
    onInitialized?: (appInfo: AppInfo) => void;
    /** Tool input arguments to send when app initializes */
    toolInput?: Record<string, unknown>;
    /** Tool result to send when app initializes */
    toolResult?: CallToolResult;
    /** Callback when an error occurs */
    onError?: (error: Error) => void;
}
/**
 * Low-level component that renders pre-fetched HTML in a sandboxed iframe.
 *
 * This component requires a pre-configured AppBridge for MCP communication.
 * For automatic AppBridge creation and resource fetching, use the higher-level
 * AppRenderer component instead.
 *
 * @example With pre-configured AppBridge
 * ```tsx
 * const appBridge = new AppBridge(client, hostInfo, capabilities);
 * // ... configure appBridge handlers ...
 *
 * <AppFrame
 *   html={htmlContent}
 *   sandbox={{ url: sandboxUrl }}
 *   appBridge={appBridge}
 *   toolInput={args}
 *   toolResult={result}
 *   onSizeChanged={({ width, height }) => console.log('Size:', width, height)}
 * />
 * ```
 */
export declare const AppFrame: (props: AppFrameProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AppFrame.d.ts.map