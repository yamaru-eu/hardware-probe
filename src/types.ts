/**
 * Hardware specifications of the local machine.
 */
export interface SystemSpecs {
  cpu: {
    manufacturer: string;
    brand: string;
    speed: number;
    cores: number;
    physicalCores: number;
    processors?: number;
  };
  memory: {
    total: number;
    totalGb: string;
    free: number;
    used: number;
    layout?: Array<{
      size: number;
      bank: string;
      type: string;
      clockSpeed: number | null;
      formFactor: string;
    }>;
  };
  graphics?: {
    controllers: Array<{
      model: string;
      vendor: string;
      vram: number | null;
      bus: string;
    }>;
    displays: Array<{
      model: string;
      main: boolean;
      resolutionX: number | null;
      resolutionY: number | null;
      refreshRate: number | null;
      sizeX: number | null;
      sizeY: number | null;
    }>;
  };
  storage: Array<{
    type: string;
    name: string;
    vendor: string;
    size: number;
    interface: string;
  }>;
  baseboard: {
    manufacturer: string;
    model: string;
    version: string;
    memMax: number | null;
    memSlots: number | null;
  };
  os: {
    platform: string;
    distro: string;
    release: string;
    arch: string;
    hostname?: string;
    locale?: string;
  };
}

/**
 * Real-time system performance data.
 */
export interface PerformanceStatus {
  cpuLoad: {
    currentLoad: number;
    currentLoadUser: number;
    currentLoadSystem: number;
    rawCurrentLoad: number;
  };
  memoryUsage: {
    total: number;
    used: number;
    active: number;
    available: number;
    swaptotal: number;
    swapused: number;
  };
  topProcesses: Array<{
    name: string;
    cpu: number;
    mem: number;
    pid?: number;
  }>;
}

/**
 * Advanced diagnostic report for RAM pressure.
 */
export interface RamPressureReport {
  memory: {
    totalBytes: number;
    usedBytes: number;
    freeBytes: number;
    availableBytes: number;
    activeBytes: number;
    usedPercent: number;
  };
  swap: {
    totalBytes: number;
    usedBytes: number;
    freeBytes: number;
    usedPercent: number;
  };
  topProcessesByMemory: Array<{
    pid: number;
    name: string;
    rssKb: number;
    cpuPercent: number;
  }>;
}

/**
 * Advanced diagnostic report for storage health.
 */
export interface StorageHealthReport {
  disks: Array<{
    device: string;
    type: string;
    name: string;
    vendor: string;
    sizeBytes: number;
    interfaceType: string;
    temperatureC: number | null;
    smartStatus: string;
    firmwareRevision: string;
    serialNum: string;
  }>;
}

/**
 * Advanced thermal and frequency profile.
 */
export interface ThermalProfileReport {
  cpu: {
    mainTempC: number | null;
    maxTempC: number | null;
    coresTempC: number[];
    currentSpeedGhzAvg: number;
    currentSpeedGhzPerCore: number[];
    minSpeedGhz: number;
    maxSpeedGhz: number;
  };
  gpus: Array<{
    vendor: string;
    model: string;
    driverVersion: string | null;
    temperatureC: number | null;
    utilizationPercent: number | null;
    vramTotalMb: number | null;
    vramUsedMb: number | null;
    vramFreeMb: number | null;
    fanSpeedPercent: number | null;
  }>;
}

/**
 * Antivirus and EDR impact report.
 */
export type VendorExclusionStatus = "read" | "vendor_opaque" | "requires_elevation" | "not_installed";

export interface VendorExclusions {
  name: string;
  status: VendorExclusionStatus;
  source: string | null;
  paths: string[];
  processes: string[];
  extensions: string[];
}

export interface DetectedAvProduct {
  vendor: string;
  process: string | null;
  pid: number | null;
  cpuPercent: number | null;
  memRssKb: number | null;
  realtimeProtection: boolean | null;
}

export interface AntivirusImpactReport {
  platform: NodeJS.Platform;
  wslInterop: boolean;
  detectedProducts: DetectedAvProduct[];
  existingExclusions: { vendors: VendorExclusions[] };
  devHotPathsObserved: Array<{
    path: string;
    existsOnDisk: boolean;
    coveredByAnyExclusion: boolean;
  }>;
}

/**
 * Statistical report for system health monitoring over time.
 */
export interface MonitoringReport {
  durationSeconds: number;
  intervalSeconds: number;
  samples: number;
  cpu: {
    minLoad: number;
    maxLoad: number;
    avgLoad: number;
  };
  ram: {
    minUsedPercent: number;
    maxUsedPercent: number;
    avgUsedPercent: number;
  };
  thermal: {
    minTempC: number | null;
    maxTempC: number | null;
    avgTempC: number | null;
  } | null;
}

/**
 * Common configuration for the MCP server.
 */
export interface AppConfig {
  remoteApiUrl: string;
  serverName: string;
  serverVersion: string;
}
