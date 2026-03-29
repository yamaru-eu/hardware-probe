import { AppConfig } from "./types.js";
/**
 * Default configuration values.
 * Uses environment variables with sensible fallbacks.
 */
export declare const CONFIG: AppConfig;
/**
 * Validates that the configuration is sane.
 */
export declare function validateConfig(): void;
