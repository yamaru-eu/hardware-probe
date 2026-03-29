import { EmbeddedResource } from '@modelcontextprotocol/sdk/types.js';

export declare function isUIResource<T extends {
    type: string;
    resource?: Partial<EmbeddedResource['resource']>;
}>(content: T): content is T & {
    type: 'resource';
    resource: Partial<EmbeddedResource['resource']>;
};
//# sourceMappingURL=isUIResource.d.ts.map