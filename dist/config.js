/**
 * Default configuration values.
 * Uses environment variables with sensible fallbacks.
 */
export const CONFIG = {
    // Remote API URL, removing trailing slashes and the '/recommend' path if accidentally provided
    // Defaults to official api.yamaru.eu subdomain
    remoteApiUrl: (process.env.REMOTE_API_URL || "https://api.yamaru.eu/api").replace(/\/recommend\/?$/, "").replace(/\/$/, ""),
    serverName: "yamaru-hardware-probe",
    serverVersion: "1.0.3",
};
/**
 * Validates that the configuration is sane.
 */
export function validateConfig() {
    try {
        new URL(CONFIG.remoteApiUrl);
    }
    catch (e) {
        throw new Error(`Invalid REMOTE_API_URL: ${CONFIG.remoteApiUrl}`);
    }
}
