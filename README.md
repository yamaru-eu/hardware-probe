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
```

## 🧠 Expert Inference Optimization (Claude Plugin Mode)

This probe is uniquely designed to help LLMs optimize **local AI inference** (Ollama, LM Studio, vLLM). When used as a Claude plugin, it provides:

1. **Deep Scan**: Beyond simple specs, it benchmarks your real **Memory Bandwidth (GB/s)** and detects **ML Runtimes** (CUDA, WSL2, Docker).
2. **Self-Describing Intelligence**: It includes an "Expert Knowledge" tool that teaches Claude how to interpret your hardware topology.

**Example query to Claude:**
> "Analyze my machine's inference configuration and tell me how I can speed up Ollama."

## Key Features

- **Deep Hardware Analysis**: Reports CPU, GPU (VRAM), detailed RAM (slots), Storage (SSD/HDD/NVMe), and Displays.
- **Inference Diagnostics**: Real-world memory bandwidth benchmark and ML runtime discovery.
- **Native Anonymization**: Automatically filters out serial numbers, UUIDs, and hostnames.
- **Performance Monitor**: Real-time analysis of CPU load and memory pressure.

## Exposed MCP Tools

1. `analyze_local_system`: Returns a complete, anonymized hardware inventory.
2. `analyze_performance`: Returns current system load and active processes.
3. `analyze_inference_config`: **[NEW]** Deep scan for LLM optimization (Bandwidth, WSL2, Docker, GPU drivers).
4. `get_inference_expert_knowledge`: **[NEW]** Returns the expert rules for hardware/software optimization.
5. `check_llm_compatibility`: Verifies if a specific LLM (e.g., "Llama 3.1 70B") can run on the system.
6. `get_llm_recommendations`: Recommends the best local LLMs based on your specs.
7. `check_software_compatibility`: Verifies compatibility with a given software or game.
8. `get_hardware_recommendation`: Analyzes the system and suggests upgrades via the remote API.

## Commands

```bash
npm install        # Install dependencies
npm run build      # Compile TypeScript
npm run dev        # Fast launch via tsx
npm run inspector  # Launch the interactive MCP inspector
npm run lint       # Type checking
```

## Configuration

- `REMOTE_API_URL`: Remote API URL (default: `http://localhost:3000`).
