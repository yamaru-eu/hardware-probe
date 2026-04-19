import si from "systeminformation";
import { execFile } from "node:child_process";
import { readFile, stat } from "node:fs/promises";
import { promisify } from "node:util";
import path from "node:path";
import { 
  SystemSpecs, 
  PerformanceStatus, 
  RamPressureReport, 
  StorageHealthReport, 
  ThermalProfileReport, 
  AntivirusImpactReport,
  DetectedAvProduct,
  VendorExclusions,
  VendorExclusionStatus,
  MonitoringReport
} from "./types.js";
import { InferenceScanner } from "./scanner.service.js";

const execFileAsync = promisify(execFile);

interface AvVendorSignature {
  vendor: string;
  processNames: string[];
}

const WINDOWS_VENDORS: AvVendorSignature[] = [
  { vendor: "Windows Defender", processNames: ["MsMpEng.exe", "NisSrv.exe"] },
  { vendor: "CrowdStrike Falcon", processNames: ["CSFalconService.exe", "CSFalconContainer.exe"] },
  { vendor: "Sophos", processNames: ["SophosFS.exe", "SAVService.exe", "SophosNtpService.exe"] },
  { vendor: "Symantec/Norton", processNames: ["ccSvcHst.exe", "NortonSecurity.exe"] },
  { vendor: "McAfee", processNames: ["mcshield.exe", "masvc.exe"] },
  { vendor: "ESET", processNames: ["ekrn.exe", "egui.exe"] },
  { vendor: "Kaspersky", processNames: ["avp.exe", "avpui.exe"] },
  { vendor: "Microsoft Defender for Endpoint", processNames: ["MsSense.exe", "SenseNdr.exe"] },
];

const MACOS_VENDORS: AvVendorSignature[] = [
  { vendor: "Microsoft Defender for Endpoint", processNames: ["wdavdaemon", "mdatp"] },
  { vendor: "CrowdStrike Falcon", processNames: ["falcond", "com.crowdstrike.falcon.Agent"] },
  { vendor: "Sophos", processNames: ["SophosScanD", "SophosAntiVirus"] },
  { vendor: "ClamAV", processNames: ["clamd"] },
  { vendor: "SentinelOne", processNames: ["sentineld", "SentinelAgent"] },
];

const LINUX_VENDORS: AvVendorSignature[] = [
  { vendor: "ClamAV", processNames: ["clamd"] },
  { vendor: "Microsoft Defender for Endpoint", processNames: ["mdatp", "wdavdaemon"] },
  { vendor: "CrowdStrike Falcon", processNames: ["falcon-sensor", "falcond"] },
  { vendor: "SentinelOne", processNames: ["sentineld", "sentinelone"] },
  { vendor: "ESET File Security", processNames: ["esets_daemon", "esets"] },
];

const CLAMAV_CONF_CANDIDATES = [
  "/etc/clamav/clamd.conf",
  "/usr/local/etc/clamav/clamd.conf",
  "/opt/homebrew/etc/clamav/clamd.conf",
];

/**
 * Service for interacting with system hardware information.
 */
export class HardwareService {
  private scanner = new InferenceScanner();

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
          pid: p.pid,
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
        processors: cpu.processors,
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
        hostname: osInfo.hostname,
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
    
    const anonymizedOs = { ...specs.os, locale };
    delete anonymizedOs.hostname;

    return {
      ...specs,
      os: anonymizedOs
    };
  }

  /**
   * Performs deep analysis of the system for LLM inference optimization.
   */
  async getInferenceOptimData(): Promise<any> {
    const [gpu, bandwidth, runtimes] = await Promise.all([
      this.scanner.scanGPU(),
      this.scanner.estimateBandwidth(),
      this.scanner.scanRuntimes()
    ]);

    const envVars = this.scanner.scanEnvVars();

    return {
      gpu: gpu.value,
      gpu_detection_method: gpu.method,
      gpu_trust_level: gpu.trust,
      memory_bandwidth_gbs: bandwidth.value,
      runtimes,
      environment_variables: envVars,
      timestamp: new Date().toISOString()
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

  // --- Advanced Diagnostic Methods ---

  async getRamPressure(): Promise<RamPressureReport> {
    const [mem, procs] = await Promise.all([si.mem(), si.processes()]);

    const memUsedPct = mem.total > 0 ? (mem.active / mem.total) * 100 : 0;
    const swapUsedPct = mem.swaptotal > 0 ? (mem.swapused / mem.swaptotal) * 100 : 0;

    const topProcessesByMemory = procs.list
      .slice()
      .sort((a, b) => b.memRss - a.memRss)
      .slice(0, 10)
      .map((p) => ({
        pid: p.pid,
        name: p.name,
        rssKb: p.memRss,
        cpuPercent: Number(p.cpu.toFixed(1)),
      }));

    return {
      memory: {
        totalBytes: mem.total,
        usedBytes: mem.used,
        freeBytes: mem.free,
        availableBytes: mem.available,
        activeBytes: mem.active,
        usedPercent: Number(memUsedPct.toFixed(1)),
      },
      swap: {
        totalBytes: mem.swaptotal,
        usedBytes: mem.swapused,
        freeBytes: mem.swapfree,
        usedPercent: Number(swapUsedPct.toFixed(1)),
      },
      topProcessesByMemory,
    };
  }

  async getStorageHealth(): Promise<StorageHealthReport> {
    const disks = await si.diskLayout();

    return {
      disks: disks.map((d) => ({
        device: d.device,
        type: d.type,
        name: d.name,
        vendor: d.vendor,
        sizeBytes: d.size,
        interfaceType: d.interfaceType,
        temperatureC: d.temperature ?? null,
        smartStatus: d.smartStatus,
        firmwareRevision: d.firmwareRevision,
        serialNum: d.serialNum,
      })),
    };
  }

  async getThermalProfile(): Promise<ThermalProfileReport> {
    const [temp, speed, cpu, gpu] = await Promise.all([
      si.cpuTemperature(),
      si.cpuCurrentSpeed(),
      si.cpu(),
      si.graphics(),
    ]);

    const toNullableNumber = (v: unknown): number | null => {
      return typeof v === "number" && !Number.isNaN(v) ? v : null;
    };

    return {
      cpu: {
        mainTempC: toNullableNumber(temp.main),
        maxTempC: toNullableNumber(temp.max),
        coresTempC: Array.isArray(temp.cores) ? temp.cores : [],
        currentSpeedGhzAvg: speed.avg,
        currentSpeedGhzPerCore: Array.isArray(speed.cores) ? speed.cores : [],
        minSpeedGhz: cpu.speedMin,
        maxSpeedGhz: cpu.speedMax,
      },
      gpus: (gpu.controllers ?? []).map((c) => ({
        vendor: c.vendor,
        model: c.model,
        driverVersion: c.driverVersion ?? null,
        temperatureC: toNullableNumber(c.temperatureGpu),
        utilizationPercent: toNullableNumber(c.utilizationGpu),
        vramTotalMb: toNullableNumber(c.memoryTotal),
        vramUsedMb: toNullableNumber(c.memoryUsed),
        vramFreeMb: toNullableNumber(c.memoryFree),
        fanSpeedPercent: toNullableNumber(c.fanSpeed),
      })),
    };
  }

  async getAntivirusImpact(cwd?: string): Promise<AntivirusImpactReport> {
    const platform = process.platform;
    const targetCwd = cwd ?? process.cwd();
    const wslInterop = await this.isWslInterop();

    let procList: any[] = [];
    try {
      const procs = await si.processes();
      procList = Array.isArray(procs.list) ? procs.list : [];
    } catch {
      procList = [];
    }

    const vendors: VendorExclusions[] = [];
    let detectedProducts: DetectedAvProduct[] = [];

    if (platform === "win32") {
      detectedProducts = this.matchVendorProcesses(WINDOWS_VENDORS, procList);
      vendors.push(await this.readDefenderExclusions("powershell.exe"));
      for (const sig of WINDOWS_VENDORS) {
        if (sig.vendor === "Windows Defender") continue;
        const detected = detectedProducts.some((d) => d.vendor === sig.vendor);
        vendors.push({
          name: sig.vendor,
          status: detected ? "vendor_opaque" : "not_installed",
          source: null,
          paths: [],
          processes: [],
          extensions: [],
        });
      }
    } else if (platform === "darwin") {
      detectedProducts = this.matchVendorProcesses(MACOS_VENDORS, procList);
      vendors.push(await this.readMdatpExclusions());
      vendors.push(await this.readClamavExclusions());
      vendors.push({
        name: "XProtect (built-in)",
        status: "vendor_opaque",
        source: null,
        paths: [],
        processes: [],
        extensions: [],
      });
      for (const sig of MACOS_VENDORS) {
        if (sig.vendor === "ClamAV" || sig.vendor === "Microsoft Defender for Endpoint") continue;
        const detected = detectedProducts.some((d) => d.vendor === sig.vendor);
        vendors.push({
          name: sig.vendor,
          status: detected ? "vendor_opaque" : "not_installed",
          source: null,
          paths: [],
          processes: [],
          extensions: [],
        });
      }
    } else if (platform === "linux") {
      detectedProducts = this.matchVendorProcesses(LINUX_VENDORS, procList);
      vendors.push(await this.readClamavExclusions());
      vendors.push(await this.readMdatpExclusions());
      for (const sig of LINUX_VENDORS) {
        if (sig.vendor === "ClamAV" || sig.vendor === "Microsoft Defender for Endpoint") continue;
        const detected = detectedProducts.some((d) => d.vendor === sig.vendor);
        vendors.push({
          name: sig.vendor,
          status: detected ? "requires_elevation" : "not_installed",
          source: null,
          paths: [],
          processes: [],
          extensions: [],
        });
      }
      if (wslInterop) {
        vendors.push(await this.readDefenderExclusions("powershell.exe"));
      }
    }

    const allExclusionPaths = vendors.flatMap((v) => v.paths);
    const devHotPathsObserved = await this.observeDevHotPaths(targetCwd, allExclusionPaths, platform);

    return {
      platform,
      wslInterop: platform === "linux" ? wslInterop : false,
      detectedProducts,
      existingExclusions: { vendors },
      devHotPathsObserved,
    };
  }

  /**
   * Monitors system health over a specified duration.
   * Useful for detecting transient issues like thermal throttling or memory leaks.
   */
  async monitorSystemHealth(durationSec: number, intervalSec: number): Promise<MonitoringReport> {
    const samples = Math.max(1, Math.floor(durationSec / intervalSec));
    const cpuLoads: number[] = [];
    const ramPercents: number[] = [];
    const temps: number[] = [];

    for (let i = 0; i < samples; i++) {
      const [load, mem, temp] = await Promise.all([
        si.currentLoad(),
        si.mem(),
        si.cpuTemperature(),
      ]);

      cpuLoads.push(load.currentLoad);
      ramPercents.push((mem.active / mem.total) * 100);
      if (typeof temp.main === "number" && !Number.isNaN(temp.main)) {
        temps.push(temp.main);
      }

      if (i < samples - 1) {
        await new Promise((resolve) => setTimeout(resolve, intervalSec * 1000));
      }
    }

    const stats = (arr: number[]) => ({
      min: Math.min(...arr),
      max: Math.max(...arr),
      avg: Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2)),
    });

    const cpuStats = stats(cpuLoads);
    const ramStats = stats(ramPercents);
    const tempStats = temps.length > 0 ? stats(temps) : null;

    return {
      durationSeconds: durationSec,
      intervalSeconds: intervalSec,
      samples: cpuLoads.length,
      cpu: {
        minLoad: cpuStats.min,
        maxLoad: cpuStats.max,
        avgLoad: cpuStats.avg,
      },
      ram: {
        minUsedPercent: ramStats.min,
        maxUsedPercent: ramStats.max,
        avgUsedPercent: ramStats.avg,
      },
      thermal: tempStats ? {
        minTempC: tempStats.min,
        maxTempC: tempStats.max,
        avgTempC: tempStats.avg,
      } : null,
    };
  }

  // --- Private Helpers for Diagnostics ---

  private async isWslInterop(): Promise<boolean> {
    if (process.platform !== "linux") return false;
    try {
      const v = await readFile("/proc/version", "utf8");
      return /microsoft/i.test(v);
    } catch {
      return false;
    }
  }

  private matchVendorProcesses(signatures: AvVendorSignature[], procList: any[]): DetectedAvProduct[] {
    const out: DetectedAvProduct[] = [];
    const normalize = (name: string) => name.toLowerCase().replace(/\.exe$/, "");
    for (const sig of signatures) {
      const wanted = sig.processNames.map(normalize);
      for (const p of procList) {
        if (!p || typeof p.name !== "string") continue;
        if (!wanted.includes(normalize(p.name))) continue;
        out.push({
          vendor: sig.vendor,
          process: p.name,
          pid: p.pid,
          cpuPercent: typeof p.cpu === "number" ? Number(p.cpu.toFixed(1)) : null,
          memRssKb: p.memRss,
          realtimeProtection: null,
        });
      }
    }
    return out;
  }

  private async safeExec(file: string, args: string[], timeoutMs = 3000) {
    try {
      const r = await execFileAsync(file, args, { timeout: timeoutMs, windowsHide: true });
      return { stdout: String(r.stdout ?? ""), stderr: String(r.stderr ?? ""), code: 0 };
    } catch (err) {
      const e = err as any;
      return {
        stdout: "",
        stderr: e?.stderr ? String(e.stderr) : "",
        code: typeof e?.code === "number" ? e.code : null,
      };
    }
  }

  private async readDefenderExclusions(powershellBin = "powershell.exe"): Promise<VendorExclusions> {
    const psCmd = "Get-MpPreference | Select-Object ExclusionPath,ExclusionProcess,ExclusionExtension | ConvertTo-Json -Compress";
    const r = await this.safeExec(powershellBin, ["-NoProfile", "-NonInteractive", "-Command", psCmd]);
    const source = process.platform !== "win32" ? `wsl-interop:${powershellBin}` : powershellBin;
    
    if (!r || r.code !== 0 || !r.stdout.trim()) {
      return { name: "Windows Defender", status: "vendor_opaque", source, paths: [], processes: [], extensions: [] };
    }

    try {
      const parsed = JSON.parse(r.stdout);
      const toStringArray = (v: any) => Array.isArray(v) ? v.filter(x => typeof x === "string") : (typeof v === "string" ? [v] : []);
      return {
        name: "Windows Defender",
        status: "read",
        source,
        paths: toStringArray(parsed.ExclusionPath),
        processes: toStringArray(parsed.ExclusionProcess),
        extensions: toStringArray(parsed.ExclusionExtension),
      };
    } catch {
      return { name: "Windows Defender", status: "vendor_opaque", source, paths: [], processes: [], extensions: [] };
    }
  }

  private async readMdatpExclusions(): Promise<VendorExclusions> {
    const r = await this.safeExec("mdatp", ["exclusion", "list", "--output", "json"]);
    if (!r || r.code !== 0 || !r.stdout.trim()) {
      return { name: "Microsoft Defender for Endpoint", status: "not_installed", source: null, paths: [], processes: [], extensions: [] };
    }
    try {
      const parsed = JSON.parse(r.stdout);
      const paths: string[] = [];
      const processes: string[] = [];
      const extensions: string[] = [];
      const entries = Array.isArray(parsed) ? parsed : (parsed?.exclusions || []);
      
      for (const e of entries) {
        if (e.path) paths.push(e.path);
        if (e.processName || e.processImageName) processes.push(e.processName || e.processImageName);
        if (e.extension) extensions.push(e.extension);
      }
      return {
        name: "Microsoft Defender for Endpoint",
        status: "read",
        source: "mdatp",
        paths: Array.from(new Set(paths)),
        processes: Array.from(new Set(processes)),
        extensions: Array.from(new Set(extensions)),
      };
    } catch {
      return { name: "Microsoft Defender for Endpoint", status: "vendor_opaque", source: "mdatp", paths: [], processes: [], extensions: [] };
    }
  }

  private async readClamavExclusions(): Promise<VendorExclusions> {
    for (const p of CLAMAV_CONF_CANDIDATES) {
      try {
        const content = await readFile(p, "utf8");
        const paths: string[] = [];
        const extensions: string[] = [];
        for (const line of content.split("\n")) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith("#")) continue;
          const m = trimmed.match(/^(ExcludePath|OnAccessExcludePath|ExcludePUA)\s+(.+)$/);
          if (!m) continue;
          if (m[1] === "ExcludePUA") extensions.push(m[2].trim());
          else paths.push(m[2].trim());
        }
        return { name: "ClamAV", status: "read", source: p, paths, processes: [], extensions };
      } catch { continue; }
    }
    return { name: "ClamAV", status: "not_installed", source: null, paths: [], processes: [], extensions: [] };
  }

  private async observeDevHotPaths(cwd: string, exclusionPaths: string[], platform: string): Promise<any[]> {
    const joiner = platform === "win32" ? path.win32 : path.posix;
    const names = ["node_modules", ".git", "dist", "build", "target", "__pycache__", ".venv", "venv"];
    const candidates = names.map(n => joiner.join(cwd, n));

    const normalize = (s: string) => {
      const trimmed = s.replace(/[\\/]+$/, "");
      return platform === "win32" ? trimmed.toLowerCase() : trimmed;
    };

    return Promise.all(candidates.map(async p => {
      let exists = false;
      try { await stat(p); exists = true; } catch { exists = false; }
      
      const hp = normalize(p);
      const covered = exclusionPaths.some(raw => {
        if (!raw) return false;
        const ex = normalize(raw);
        return hp === ex || hp.startsWith(ex + (platform === "win32" ? "\\" : "/"));
      });

      return { path: p, existsOnDisk: exists, coveredByAnyExclusion: covered };
    }));
  }
}
