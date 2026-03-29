import { ClientCapabilities } from '@modelcontextprotocol/sdk/types.js';

/**
 * Extended ClientCapabilities type that includes the `extensions` field.
 *
 * This type is a forward-compatible extension of the MCP SDK's ClientCapabilities,
 * adding support for the `extensions` field pattern proposed in SEP-1724.
 *
 * @see https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1724
 */
export interface ClientCapabilitiesWithExtensions extends ClientCapabilities {
    extensions?: {
        [extensionName: string]: unknown;
    };
}
/**
 * Extension identifier for MCP UI support.
 *
 * Follows the pattern from SEP-1724: `{vendor-prefix}/{extension-name}`
 *
 * @see https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1724
 */
export declare const UI_EXTENSION_NAME: "io.modelcontextprotocol/ui";
/**
 * UI extension capability configuration.
 *
 * Declares support for rendering UI resources with specific MIME types.
 */
export declare const UI_EXTENSION_CONFIG: {
    readonly mimeTypes: readonly ["text/html;profile=mcp-app"];
};
/**
 * UI extension capabilities object to use in the `extensions` field.
 *
 * Use this when creating an MCP Client to declare support for rendering
 * UI resources.
 *
 * @example
 * ```typescript
 * import { Client } from '@modelcontextprotocol/sdk/client/index.js';
 * import {
 *   type ClientCapabilitiesWithExtensions,
 *   UI_EXTENSION_CAPABILITIES,
 * } from '@mcp-ui/client';
 *
 * const capabilities: ClientCapabilitiesWithExtensions = {
 *   // Standard MCP capabilities
 *   roots: { listChanged: true },
 *   // UI extension support (SEP-1724 pattern)
 *   extensions: UI_EXTENSION_CAPABILITIES,
 * };
 *
 * const client = new Client(
 *   { name: 'my-app', version: '1.0.0' },
 *   { capabilities }
 * );
 * ```
 *
 * @see https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1724
 */
export declare const UI_EXTENSION_CAPABILITIES: {
    readonly "io.modelcontextprotocol/ui": {
        readonly mimeTypes: readonly ["text/html;profile=mcp-app"];
    };
};
//# sourceMappingURL=capabilities.d.ts.map