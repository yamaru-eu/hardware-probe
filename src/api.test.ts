import { describe, it, expect, vi, beforeEach } from "vitest";
import { ApiClient } from "./api.client.js";

describe("ApiClient", () => {
  const mockBaseUrl = "http://api.test";
  const client = new ApiClient(mockBaseUrl);

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it("should format software compatibility requests correctly", async () => {
    const mockResponse = { status: "compatible" };
    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    });

    const specs: any = { cpu: "test" };
    const result = await client.checkSoftwareCompatibility(specs, "GameX");

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/check-compatibility"),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ specs, software_name: "GameX" })
      })
    );
    expect(result).toEqual(mockResponse);
  });

  it("should throw a meaningful error when API returns 500", async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
      status: 500,
      text: () => Promise.resolve("Internal Server Error")
    });

    await expect(client.checkSoftwareCompatibility({} as any, "X"))
      .rejects.toThrow("API error (500): Internal Server Error");
  });

  it("should handle timeouts correctly", async () => {
    const timeoutError = new Error("Timeout");
    timeoutError.name = "TimeoutError";
    (fetch as any).mockRejectedValue(timeoutError);

    await expect(client.getLlmRecommendations({} as any))
      .rejects.toThrow(/request timed out/);
  });
});
