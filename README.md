# Yamaru Hardware Probe (MCP)

[![NPM Version](https://img.shields.io/npm/v/@yamaru-eu/hardware-probe?color=blue&logo=npm)](https://www.npmjs.com/package/@yamaru-eu/hardware-probe)
[![NPM Downloads](https://img.shields.io/npm/dw/@yamaru-eu/hardware-probe?logo=npm)](https://www.npmjs.com/package/@yamaru-eu/hardware-probe)
[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-io.github.yamaru--eu%2Fhardware--probe-blueviolet?logo=planetscale)](https://modelcontextprotocol.io/)
[![Awesome MCP](https://awesome.re/badge.svg)](https://github.com/modelcontextprotocol/servers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
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
- `analyze_ram_pressure`: Detailed memory pressure and RSS analysis for deep RAM troubleshooting.
- `check_storage_health`: Disk SMART health, firmware, and I/O bottleneck analysis.
- `thermal_profile`: Real-time CPU/GPU thermal states, fan speeds, and frequency throttling detection.
- `diagnose_antivirus_impact`: Detects EDR/Antivirus conflicts and exclusion coverage on dev paths.
- `monitor_system_health`: Statistical health report (min/max/avg) over a specified duration.
- `check_llm_compatibility` **(BETA)**: Predicts performance for a specific LLM model via remote API.
- `get_llm_recommendations` **(BETA)**: Recommends the best local models via remote API.
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
