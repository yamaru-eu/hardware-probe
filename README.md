# Yamaru Hardware Probe (MCP)

Official Model Context Protocol (MCP) server for hardware inventory and AI-assisted diagnostics. Part of the [Yamaru](https://www.yamaru.eu) ecosystem.

## 📦 Official Repository
The official standalone repository for this project is: [github.com/yamaru-eu/hardware-probe](https://github.com/yamaru-eu/hardware-probe).

## 🚀 Quick Start (for Claude Desktop)

The easiest way to use the Yamaru Hardware Probe is via **npx**. No installation or configuration is required for your npm client.

### 1. Automatic usage via npx
Add this to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "yamaru-probe": {
      "command": "npx",
      "args": ["-y", "@yamaru-eu/hardware-probe"]
    }
  }
}
```

### 2. Manual Installation (Optional)
If you prefer to install it globally on your system:
```bash
npm install -g @yamaru-eu/hardware-probe
# Then use 'yamaru-probe' as the command in your configuration
```

## Key Features

- **Deep Hardware Analysis**: Reports CPU, GPU (VRAM), detailed RAM (slots), Storage (SSD/HDD/NVMe), and Displays (Resolution/Hz).
- **Native Anonymization**: Automatically filters out serial numbers, UUIDs, and hostnames before sending data to the LLM.
- **Performance Monitor**: Real-time analysis of CPU load, memory usage, and identification of the top 5 most resource-heavy processes.
- **Compatibility Checker**: Test if the machine can run a specific software/game via the remote API.

## Commands

```bash
npm install        # Install dependencies
npm run build      # Compile TypeScript
npm run dev        # Fast launch via tsx
npm run inspector  # Launch the interactive MCP inspector
npm run lint       # Type checking
```

## Exposed MCP Tools

1. `analyze_local_system`: Returns a complete, anonymized hardware inventory.
2. `analyze_performance`: Returns current system load and active processes.
3. `check_software_compatibility`: Verifies compatibility with a given software (e.g., "Cyberpunk 2077").
4. `get_hardware_recommendation`: Analyzes the system and suggests upgrades via the remote API.

## Configuration

- `REMOTE_API_URL`: Remote API URL (default: `http://localhost:3000`).
