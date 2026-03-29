import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { CallToolRequest, CallToolResult, JSONRPCRequest, ListPromptsRequest, ListPromptsResult, ListResourcesRequest, ListResourcesResult, ListResourceTemplatesRequest, ListResourceTemplatesResult, LoggingMessageNotification, ReadResourceRequest, ReadResourceResult } from '@modelcontextprotocol/sdk/types.js';
import { AppBridge, McpUiMessageRequest, McpUiMessageResult, McpUiOpenLinkRequest, McpUiOpenLinkResult, McpUiSizeChangedNotification, McpUiToolInputPartialNotification, McpUiHostContext } from '@modelcontextprotocol/ext-apps/app-bridge';
import { SandboxConfig } from './AppFrame';

/**
 * Extra metadata passed to request handlers (from AppBridge).
 */
export type RequestHandlerExtra = Parameters<Parameters<AppBridge['setRequestHandler']>[1]>[1];
/**
 * Handle to access AppRenderer methods for sending notifications to the Guest UI.
 * Obtained via ref on AppRenderer.
 */
export interface AppRendererHandle {
    /** Notify the Guest UI that the server's tool list has changed */
    sendToolListChanged: () => void;
    /** Notify the Guest UI that the server's resource list has changed */
    sendResourceListChanged: () => void;
    /** Notify the Guest UI that the server's prompt list has changed */
    sendPromptListChanged: () => void;
    /** Notify the Guest UI that the resource is being torn down / cleaned up */
    teardownResource: () => void;
}
/**
 * Props for the AppRenderer component.
 */
export interface AppRendererProps {
    /** MCP client connected to the server providing the tool. Omit to disable automatic MCP forwarding and use custom handlers instead. */
    client?: Client;
    /** Name of the MCP tool to render UI for */
    toolName: string;
    /** Sandbox configuration */
    sandbox: SandboxConfig;
    /** Optional pre-fetched resource URI. If not provided, will be fetched via getToolUiResourceUri() */
    toolResourceUri?: string;
    /** Optional pre-fetched HTML. If provided, skips all resource fetching */
    html?: string;
    /** Optional input arguments to pass to the tool UI once it's ready */
    toolInput?: Record<string, unknown>;
    /** Optional result from tool execution to pass to the tool UI once it's ready */
    toolResult?: CallToolResult;
    /** Partial/streaming tool input to send to the guest UI */
    toolInputPartial?: McpUiToolInputPartialNotification['params'];
    /** Set to true to notify the guest UI that the tool execution was cancelled */
    toolCancelled?: boolean;
    /** Host context (theme, viewport, locale, etc.) to pass to the guest UI */
    hostContext?: McpUiHostContext;
    /** Handler for open-link requests from the guest UI */
    onOpenLink?: (params: McpUiOpenLinkRequest['params'], extra: RequestHandlerExtra) => Promise<McpUiOpenLinkResult>;
    /** Handler for message requests from the guest UI */
    onMessage?: (params: McpUiMessageRequest['params'], extra: RequestHandlerExtra) => Promise<McpUiMessageResult>;
    /** Handler for logging messages from the guest UI */
    onLoggingMessage?: (params: LoggingMessageNotification['params']) => void;
    /** Handler for size change notifications from the guest UI */
    onSizeChanged?: (params: McpUiSizeChangedNotification['params']) => void;
    /** Callback invoked when an error occurs during setup or message handling */
    onError?: (error: Error) => void;
    /**
     * Handler for tools/call requests from the guest UI.
     * If provided, overrides the automatic forwarding to the MCP client.
     */
    onCallTool?: (params: CallToolRequest['params'], extra: RequestHandlerExtra) => Promise<CallToolResult>;
    /**
     * Handler for resources/list requests from the guest UI.
     * If provided, overrides the automatic forwarding to the MCP client.
     */
    onListResources?: (params: ListResourcesRequest['params'], extra: RequestHandlerExtra) => Promise<ListResourcesResult>;
    /**
     * Handler for resources/templates/list requests from the guest UI.
     * If provided, overrides the automatic forwarding to the MCP client.
     */
    onListResourceTemplates?: (params: ListResourceTemplatesRequest['params'], extra: RequestHandlerExtra) => Promise<ListResourceTemplatesResult>;
    /**
     * Handler for resources/read requests from the guest UI.
     * If provided, overrides the automatic forwarding to the MCP client.
     */
    onReadResource?: (params: ReadResourceRequest['params'], extra: RequestHandlerExtra) => Promise<ReadResourceResult>;
    /**
     * Handler for prompts/list requests from the guest UI.
     * If provided, overrides the automatic forwarding to the MCP client.
     */
    onListPrompts?: (params: ListPromptsRequest['params'], extra: RequestHandlerExtra) => Promise<ListPromptsResult>;
    /**
     * Handler for JSON-RPC requests from the guest UI that don't match any
     * built-in handler (e.g., experimental methods like "x/clipboard/write",
     * or standard MCP methods not yet in the Apps spec like "sampling/createMessage").
     *
     * This is wired to AppBridge's `fallbackRequestHandler` from the MCP SDK Protocol class.
     * It receives the full JSON-RPC request and should return a result object or throw
     * a McpError for unsupported methods.
     *
     * @example
     * ```tsx
     * <AppRenderer
     *   onFallbackRequest={async (request, extra) => {
     *     switch (request.method) {
     *       case 'x/clipboard/write':
     *         await navigator.clipboard.writeText(request.params?.text);
     *         return { success: true };
     *       case 'sampling/createMessage':
     *         return mcpClient.createMessage(request.params);
     *       default:
     *         throw new McpError(ErrorCode.MethodNotFound, `Unknown method: ${request.method}`);
     *     }
     *   }}
     * />
     * ```
     */
    onFallbackRequest?: (request: JSONRPCRequest, extra: RequestHandlerExtra) => Promise<Record<string, unknown>>;
}
/**
 * React component that renders an MCP tool's custom UI in a sandboxed iframe.
 *
 * This component manages the complete lifecycle of an MCP-UI tool:
 * 1. Creates AppBridge for MCP communication
 * 2. Fetches the tool's UI resource (HTML) if not provided
 * 3. Delegates rendering to AppFrame
 * 4. Handles UI actions (intents, link opening, prompts, notifications)
 *
 * For lower-level control or when you already have the HTML content,
 * use the AppFrame component directly.
 *
 * @example Basic usage
 * ```tsx
 * <AppRenderer
 *   sandbox={{ url: new URL('http://localhost:8765/sandbox_proxy.html') }}
 *   client={mcpClient}
 *   toolName="create-chart"
 *   toolInput={{ data: [1, 2, 3], type: 'bar' }}
 *   onOpenLink={async ({ url }) => window.open(url)}
 *   onError={(error) => console.error('UI Error:', error)}
 * />
 * ```
 *
 * @example With pre-fetched HTML (skips resource fetching)
 * ```tsx
 * <AppRenderer
 *   sandbox={{ url: sandboxUrl }}
 *   client={mcpClient}
 *   toolName="my-tool"
 *   html={preloadedHtml}
 *   toolInput={args}
 * />
 * ```
 *
 * @example Using ref to access AppBridge methods
 * ```tsx
 * const appRef = useRef<AppRendererHandle>(null);
 *
 * // Notify guest UI when tools change
 * useEffect(() => {
 *   appRef.current?.sendToolListChanged();
 * }, [toolsVersion]);
 *
 * <AppRenderer ref={appRef} ... />
 * ```
 *
 * @example With custom MCP request handlers (no client)
 * ```tsx
 * <AppRenderer
 *   // client omitted - use toolResourceUri + onReadResource to fetch HTML
 *   sandbox={{ url: sandboxUrl }}
 *   toolName="my-tool"
 *   toolResourceUri="ui://my-server/my-tool"
 *   onReadResource={async ({ uri }) => {
 *     // Proxy to your MCP client (e.g., in a different context)
 *     return myMcpProxy.readResource({ uri });
 *   }}
 *   onCallTool={async (params) => {
 *     // Custom tool call handling with caching/filtering
 *     return myCustomToolCall(params);
 *   }}
 *   onListResources={async () => {
 *     // Aggregate resources from multiple servers
 *     return { resources: [...server1Resources, ...server2Resources] };
 *   }}
 * />
 * ```
 */
export declare const AppRenderer: import('react').ForwardRefExoticComponent<AppRendererProps & import('react').RefAttributes<AppRendererHandle>>;
//# sourceMappingURL=AppRenderer.d.ts.map