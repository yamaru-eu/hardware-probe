import si from "systeminformation";
import { SystemSpecs, PerformanceStatus } from "./types.js";

/**
 * Service for interacting with system hardware information.
 */
export class HardwareService {
  /**
   * Captures real-time performance metrics.
   */
  async getPerformanceStatus(): Promise<PerformanceStatus> {
    const [load, mem, procs] = await Promise.all([
      si.currentLoad(),
      si.mem(),
      si.processes(),
    ]);

    return {
      cpuLoad: {
        currentLoad: load.currentLoad,
        currentLoadUser: load.currentLoadUser,
        currentLoadSystem: load.currentLoadSystem,
        rawCurrentLoad: load.rawCurrentLoad,
      },
      memoryUsage: {
        total: mem.total,
        used: mem.used,
        active: mem.active,
        available: mem.available,
        swaptotal: mem.swaptotal,
        swapused: mem.swapused,
      },
      topProcesses: procs.list
        .sort((a, b) => b.cpu - a.cpu)
        .slice(0, 5)
        .map((p) => ({
          name: p.name,
          cpu: p.cpu,
          mem: p.mem,
        })),
    };
  }

  /**
   * Retrieves full hardware specifications.
   */
  async getLocalSpecs(): Promise<SystemSpecs> {
    const [cpu, mem, memLayout, graphics, disks, baseboard, osInfo] = await Promise.all([
      si.cpu(),
      si.mem(),
      si.memLayout(),
      si.graphics(),
      si.diskLayout(),
      si.baseboard(),
      si.osInfo(),
    ]);

    return {
      cpu: {
        manufacturer: cpu.manufacturer,
        brand: cpu.brand,
        speed: cpu.speed,
        cores: cpu.cores,
        physicalCores: cpu.physicalCores,
      },
      memory: {
        total: mem.total,
        totalGb: (mem.total / 1024 ** 3).toFixed(1) + " GB",
        free: mem.free,
        used: mem.used,
        layout: memLayout.map((m) => ({
          size: m.size,
          bank: m.bank,
          type: m.type,
          clockSpeed: m.clockSpeed,
          formFactor: m.formFactor,
        })),
      },
      graphics: {
        controllers: graphics.controllers.map((g) => ({
          model: g.model,
          vendor: g.vendor,
          vram: g.vram,
          bus: g.bus,
        })),
        displays: graphics.displays.map((d) => ({
          model: d.model,
          main: d.main,
          resolutionX: d.currentResX,
          resolutionY: d.currentResY,
          refreshRate: d.currentRefreshRate,
          sizeX: d.sizeX,
          sizeY: d.sizeY,
        })),
      },
      storage: disks.map((d) => ({
        type: d.type,
        name: d.name,
        vendor: d.vendor,
        size: d.size,
        interface: d.interfaceType,
      })),
      baseboard: {
        manufacturer: baseboard.manufacturer,
        model: baseboard.model,
        version: baseboard.version,
        memMax: baseboard.memMax ?? null,
        memSlots: baseboard.memSlots ?? null,
      },
      os: {
        platform: osInfo.platform,
        distro: osInfo.distro,
        release: osInfo.release,
        arch: osInfo.arch,
      },
    };
  }

  /**
   * Retrieves specs and strips any Personally Identifiable Information (PII).
   */
  async getAnonymizedSpecs(): Promise<SystemSpecs> {
    const specs = await this.getLocalSpecs();
    
    // Explicit locale detection
    const locale = Intl.DateTimeFormat().resolvedOptions().locale || 'en-US';
    
    return {
      ...specs,
      os: {
        ...specs.os,
        locale
      }
    };
  }

  /**
   * Checks if the system is an Apple Silicon based machine.
   */
  isAppleSilicon(specs: SystemSpecs): boolean {
    return (
      specs.cpu.manufacturer?.toLowerCase().includes('apple') || 
      (specs.os.platform === 'darwin' && specs.os.arch === 'arm64')
    );
  }
}
