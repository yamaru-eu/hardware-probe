import { describe, it, expect } from "vitest";
import { ApiClient } from "./api.client.js";
import { SystemSpecs } from "./types.js";

/**
 * Integration test calling the LIVE production API.
 * This ensures that the published package will work correctly with the actual infrastructure.
 */
describe("Live API Integration", () => {
  const client = new ApiClient("https://api.yamaru.eu/api");

  // Mock specs for a machine that would likely need an upgrade for large models
  const mockSpecs: SystemSpecs = {
    cpu: { manufacturer: "Intel", brand: "Core i5-1135G7", speed: 2.4, cores: 4, physicalCores: 4 },
    memory: { 
        total: 8 * 1024 ** 3, 
        totalGb: "8 GB", 
        free: 2 * 1024 ** 3, 
        used: 6 * 1024 ** 3,
        layout: [] 
    },
    graphics: {
      controllers: [{ model: "Iris Xe Graphics", vendor: "Intel", vram: 1024, bus: "PCI" }],
      displays: []
    },
    storage: [],
    baseboard: { manufacturer: "Dell", model: "XPS 13", version: "1.0", memMax: 16, memSlots: 2 },
    os: { platform: "win32", distro: "Windows 11", release: "10.0.22621", arch: "x64", locale: "fr-FR" }
  };

  it("should connect to api.yamaru.eu and check LLM compatibility", async () => {
    // 1. Fetch available models first to ensure we test with a real one
    const modelsRes: any = await fetch("https://api.yamaru.eu/api/llm/models").then(r => r.json());
    const models = modelsRes.models || [];
    
    if (models.length === 0) {
      console.warn("[Integration] WARNING: No models found in production database. Skipping compatibility check.");
      return;
    }

    const testModel = models[0].name;
    console.log(`[Integration] Testing compatibility with live model: ${testModel}`);

    const result: any = await client.checkLlmCompatibility(mockSpecs, testModel);
    
    expect(result).toBeDefined();
    expect(result.result).toBeDefined();
    expect(result.result.modelName).toBe(testModel);
    expect(["perfect", "good", "too_tight", "incompatible"]).toContain(result.result.fitLevel);
    
    console.log(`[Integration] ${testModel} fit level: ${result.result.fitLevel}`);
  });

  it("should get hardware recommendations from the live API", async () => {
    const result: any = await client.getHardwareRecommendation(mockSpecs, "I want to play Cyberpunk 2077", 1000);
    
    expect(result).toBeDefined();
    expect(result.recommendations).toBeInstanceOf(Array);
    
    if (result.recommendations.length > 0) {
      const firstRec = result.recommendations[0];
      expect(firstRec.name).toBeDefined();
      expect(firstRec.offers).toBeDefined();
      expect(firstRec.offers.length).toBeGreaterThan(0);
      expect(firstRec.offers[0].url).toContain("tag="); // Verify affiliate tag injection
      
      console.log(`[Integration] Found ${result.recommendations.length} recommendations for Cyberpunk`);
      console.log(`[Integration] Top recommendation: ${firstRec.name}`);
    }
  });

  it("should return 404 for a non-existent model", async () => {
    await expect(client.checkLlmCompatibility(mockSpecs, "NonExistentModel_9999"))
      .rejects.toThrow(/404/);
  });
});
