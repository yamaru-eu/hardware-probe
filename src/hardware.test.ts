import { describe, it, expect, vi } from "vitest";
import { HardwareService } from "./hardware.service.js";

describe("HardwareService", () => {
  const service = new HardwareService();

  describe("isAppleSilicon", () => {
    it("should return true for Apple manufacturer", () => {
      const specs: any = {
        cpu: { manufacturer: "Apple" },
        os: { platform: "darwin", arch: "arm64" }
      };
      expect(service.isAppleSilicon(specs)).toBe(true);
    });

    it("should return true for Darwin ARM64 even if manufacturer is missing", () => {
      const specs: any = {
        cpu: { manufacturer: "" },
        os: { platform: "darwin", arch: "arm64" }
      };
      expect(service.isAppleSilicon(specs)).toBe(true);
    });

    it("should return false for Intel machine", () => {
      const specs: any = {
        cpu: { manufacturer: "Intel" },
        os: { platform: "win32", arch: "x64" }
      };
      expect(service.isAppleSilicon(specs)).toBe(false);
    });
  });

  describe("getAnonymizedSpecs", () => {
    it("should include a locale in the os specs", async () => {
      // Mock getLocalSpecs to avoid calling real systeminfo
      vi.spyOn(service, 'getLocalSpecs').mockResolvedValue({
        os: { platform: 'linux', distro: 'Ubuntu', arch: 'x64' }
      } as any);

      const anonymized = await service.getAnonymizedSpecs();
      expect(anonymized.os.locale).toBeDefined();
      expect(typeof anonymized.os.locale).toBe('string');
    });
  });

  describe("monitorSystemHealth", () => {
    it("should return a monitoring report with statistical data", async () => {
      const report = await service.monitorSystemHealth(2, 1);
      
      expect(report.durationSeconds).toBe(2);
      expect(report.intervalSeconds).toBe(1);
      expect(report.samples).toBeGreaterThanOrEqual(1);
      
      expect(report.cpu).toHaveProperty("minLoad");
      expect(report.cpu).toHaveProperty("maxLoad");
      expect(report.cpu).toHaveProperty("avgLoad");
      
      expect(report.ram).toHaveProperty("minUsedPercent");
      expect(report.ram).toHaveProperty("maxUsedPercent");
      expect(report.ram).toHaveProperty("avgUsedPercent");
    });
  });
});
