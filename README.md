# Yamaru Hardware Probe (MCP)

[![Expert System](https://img.shields.io/badge/Expert-Hardware%20%26%20Performance-blueviolet)](https://www.yamaru.eu)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Expert system hardware probe and performance diagnostic engine for AI, Gaming, and High-Performance workflows. This is a Model Context Protocol (MCP) server that provides deep system insights beyond simple specifications.

## Key Features

- 🔍 **Deep Hardware Inventory**: Comprehensive analysis of CPU, RAM, GPU (VRAM/Bandwidth), Storage, and OS topology.
- ⚡ **Real-time Performance Monitoring**: Live tracking of system load and identification of resource-hogging processes.
- 🧊 **Thermal & Power Diagnostics**: Detects thermal throttling and frequency clipping to resolve unexpected slowness.
- 🤖 **AI/LLM Optimization**: Specialized tools for predicting LLM performance, calculating quantization fit, and optimizing runtimes (Ollama, CUDA, Metal).
- 🛡️ **Privacy-First**: Automatic anonymization of unique hardware identifiers before any remote transmission.

## Installation

### For Gemini CLI Users
```bash
gemini extension install @yamaru-eu/hardware-probe
```

### For Manual MCP Setup
Add this to your MCP settings file (e.g., `npx-config.json` or `claude_desktop_config.json`):

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

## Available Tools

- `analyze_local_system`: Full hardware inventory.
- `analyze_performance`: Real-time performance metrics and top processes.
- `check_llm_compatibility`: Predicts performance for a specific LLM model.
- `get_llm_recommendations`: Recommends the best local models for your hardware.
- `analyze_inference_config`: Deep-dive into AI runtimes and environment variables.

## Skills Integration
When used with Gemini CLI, this extension provides the following expert skills:
- `hardware-performance-expert`: Global protocol for system health and troubleshooting.
- `local-inference-optimizer`: Specialized logic for fine-tuning local LLM runs.

## Development

```bash
npm install        # Install dependencies
npm run build      # Compile TypeScript → dist/
npm run test       # Run test suite
npm run inspector  # Test tools in the MCP Inspector
```

## License
Apache 2.0 - Part of the Yamaru Project.
