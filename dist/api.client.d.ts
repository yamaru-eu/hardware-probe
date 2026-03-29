import { SystemSpecs } from "./types.js";
/**
 * Client for interacting with the remote Yamaru API.
 */
export declare class ApiClient {
    private readonly baseUrl;
    constructor(baseUrl?: string);
    /**
     * Generic fetch wrapper with timeout and error handling.
     */
    private post;
    /**
     * Checks compatibility for a specific software.
     */
    checkSoftwareCompatibility(specs: SystemSpecs, softwareName: string): Promise<unknown>;
    /**
     * Gets general hardware recommendations.
     */
    getHardwareRecommendation(specs: SystemSpecs, userQuery: string, budget: number): Promise<unknown>;
    /**
     * Checks compatibility for a specific LLM model.
     */
    checkLlmCompatibility(specs: SystemSpecs, modelName: string): Promise<unknown>;
    /**
     * Gets recommendations for local LLM models.
     */
    getLlmRecommendations(specs: SystemSpecs, useCase?: string, limit?: number): Promise<unknown>;
}
