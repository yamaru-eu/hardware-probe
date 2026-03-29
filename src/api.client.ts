import { SystemSpecs } from "./types.js";
import { CONFIG } from "./config.js";

/**
 * Client for interacting with the remote Yamaru API.
 */
export class ApiClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string = CONFIG.remoteApiUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Generic fetch wrapper with timeout and error handling.
   */
  private async post<T>(endpoint: string, body: any): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(15_000),
      });

      if (!response.ok) {
        const errorBody = await response.text().catch(() => "(no body)");
        throw new Error(`API error (${response.status}): ${errorBody}`);
      }

      return await response.json() as T;
    } catch (error) {
      if (error instanceof Error && error.name === "TimeoutError") {
        throw new Error(`API request timed out after 15s at ${url}`);
      }
      throw error;
    }
  }

  /**
   * Checks compatibility for a specific software.
   */
  async checkSoftwareCompatibility(specs: SystemSpecs, softwareName: string) {
    return this.post("/check-compatibility", { specs, software_name: softwareName });
  }

  /**
   * Gets general hardware recommendations.
   */
  async getHardwareRecommendation(specs: SystemSpecs, userQuery: string, budget: number) {
    return this.post("/recommend", { specs, user_query: userQuery, budget });
  }

  /**
   * Checks compatibility for a specific LLM model.
   */
  async checkLlmCompatibility(specs: SystemSpecs, modelName: string) {
    return this.post("/llm/check", { specs, model_name: modelName });
  }

  /**
   * Gets recommendations for local LLM models.
   */
  async getLlmRecommendations(specs: SystemSpecs, useCase?: string, limit?: number) {
    return this.post("/llm/recommend", { specs, use_case: useCase, limit });
  }
}
