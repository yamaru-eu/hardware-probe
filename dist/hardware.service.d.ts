import { SystemSpecs, PerformanceStatus } from "./types.js";
/**
 * Service for interacting with system hardware information.
 */
export declare class HardwareService {
    /**
     * Captures real-time performance metrics.
     */
    getPerformanceStatus(): Promise<PerformanceStatus>;
    /**
     * Retrieves full hardware specifications.
     */
    getLocalSpecs(): Promise<SystemSpecs>;
    /**
     * Retrieves specs and strips any Personally Identifiable Information (PII).
     */
    getAnonymizedSpecs(): Promise<SystemSpecs>;
    /**
     * Checks if the system is an Apple Silicon based machine.
     */
    isAppleSilicon(specs: SystemSpecs): boolean;
}
