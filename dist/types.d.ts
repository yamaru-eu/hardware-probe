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
    };
    memory: {
        total: number;
        totalGb: string;
        free: number;
        used: number;
        layout: Array<{
            size: number;
            bank: string;
            type: string;
            clockSpeed: number | null;
            formFactor: string;
        }>;
    };
    graphics: {
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
    }>;
}
/**
 * Common configuration for the MCP server.
 */
export interface AppConfig {
    remoteApiUrl: string;
    serverName: string;
    serverVersion: string;
}
