#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type CallToolResult,
} from "@modelcontextprotocol/sdk/types.js";

import { CONFIG, validateConfig } from "./config.js";
import { HardwareService } from "./hardware.service.js";
import { ApiClient } from "./api.client.js";

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

validateConfig();

const hardware = new HardwareService();
const api = new ApiClient();

const server = new Server(
  {
    name: CONFIG.serverName,
    version: CONFIG.serverVersion,
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

const INFERENCE_EXPERT_SKILL = `
# Expertise: Local Inference Optimizer
Expert system for analyzing local hardware/software topology and providing actionable recommendations for LLM inference (Ollama, LM Studio, vLLM).

## Diagnostic Protocol
1. **Memory Bandwidth Analysis**: 
   - Speed < 20 GB/s: Slow (CPU/Single Channel). 
   - 20-60 GB/s: Standard (Dual Channel). 
   - > 100 GB/s: High Performance (Apple M-Series/Unified Memory).
2. **VRAM Strategy**: Model + KV Cache must fit in VRAM for speed.
3. **Runtime Troubleshooting**: Check .wslconfig limits, Docker nvidia-runtime, and OLLAMA_ env vars.

## Decision Support
- "GPU driver < 550" -> Update for Flash Attention.
- "HDD detected" -> Move to NVMe.
- "Low bandwidth" -> Check RAM Dual Channel config.
`;

// ---------------------------------------------------------------------------
// Tool Definitions
// ---------------------------------------------------------------------------

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "analyze_local_system",
        description:
          "Reads the hardware specifications of the local machine: CPU, RAM, motherboard and OS. Returns a structured JSON object.",
        inputSchema: { type: "object", properties: {}, required: [] },
      },
      {
        name: "analyze_performance",
        description:
          "Provides real-time system performance: CPU load, memory usage, and top processes.",
        inputSchema: { type: "object", properties: {}, required: [] },
      },
      {
        name: "analyze_inference_config",
        description: "Performs a deep scan for LLM inference optimization: GPU details, real memory bandwidth benchmark, ML runtimes (Ollama, Docker, WSL), and environment variables.",
        inputSchema: { type: "object", properties: {}, required: [] },
      },
      {
        name: "get_inference_expert_knowledge",
        description: "Returns the expert instructions and rules for optimizing LLM inference on this specific hardware. Call this to learn HOW to interpret analyze_inference_config results.",
        inputSchema: { type: "object", properties: {}, required: [] },
      },
      {
        name: "check_llm_compatibility",
        description: "(BETA) Checks if a specific LLM model can run on this machine. Returns optimal quantization and estimated tokens per second. Requires remote API connection.",
        inputSchema: {
          type: "object",
          properties: {
            model_name: { type: "string", description: "LLM model name (e.g., 'Llama 3.1 70B')" }
          },
          required: ["model_name"]
        }
      },
      {
        name: "get_llm_recommendations",
        description: "(BETA) Recommends the best LLM models that can run locally on this machine. Requires remote API connection.",
        inputSchema: {
          type: "object",
          properties: {
            use_case: { type: "string", enum: ["general", "coding", "reasoning", "chat"], description: "Use case" },
            limit: { type: "number", description: "Max recommendations" }
          }
        }
      },
      {
        name: "analyze_ram_pressure",
        description: "Reports current memory pressure: total/used/free/available memory, swap usage, and top processes by RSS.",
        inputSchema: { type: "object", properties: {}, required: [] },
      },
      {
        name: "check_storage_health",
        description: "Reports per-disk health: type (NVMe/SSD/HDD), vendor, temperature, SMART status, and firmware.",
        inputSchema: { type: "object", properties: {}, required: [] },
      },
      {
        name: "thermal_profile",
        description: "Reports current CPU and GPU thermal and frequency state: temperature, utilization, and fan speed.",
        inputSchema: { type: "object", properties: {}, required: [] },
      },
      {
        name: "diagnose_antivirus_impact",
        description: "Detects running antivirus/EDR products and reads their exclusion rules. Checks dev hot paths coverage.",
        inputSchema: { type: "object", properties: {}, required: [] },
      },
      {
        name: "monitor_system_health",
        description: "Monitors system metrics (CPU, RAM, Thermal) over a specified duration and returns statistical summary. Useful for diagnosing transient issues during high-load tasks.",
        inputSchema: {
          type: "object",
          properties: {
            duration_seconds: { type: "number", description: "Monitoring duration in seconds (max 60)", default: 10 },
            interval_seconds: { type: "number", description: "Sampling interval in seconds", default: 2 }
          }
        }
      },
    ],
  };
});

// ---------------------------------------------------------------------------
// Tool Handlers
// ---------------------------------------------------------------------------

server.setRequestHandler(CallToolRequestSchema, async (request): Promise<CallToolResult> => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "analyze_local_system": {
        const specs = await hardware.getLocalSpecs();
        return { content: [{ type: "text", text: JSON.stringify(specs, null, 2) }] };
      }

      case "analyze_performance": {
        const stats = await hardware.getPerformanceStatus();
        return { content: [{ type: "text", text: JSON.stringify(stats, null, 2) }] };
      }

      case "analyze_inference_config": {
        const data = await hardware.getInferenceOptimData();
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "get_inference_expert_knowledge": {
        return { content: [{ type: "text", text: INFERENCE_EXPERT_SKILL }] };
      }

      case "check_llm_compatibility": {
        const { model_name } = args as { model_name: string };
        const specs = await hardware.getAnonymizedSpecs();
        const data = await api.checkLlmCompatibility(specs, model_name);
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "get_llm_recommendations": {
        const { use_case, limit } = args as { use_case?: string; limit?: number };
        const specs = await hardware.getAnonymizedSpecs();
        const data = await api.getLlmRecommendations(specs, use_case, limit);
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "analyze_ram_pressure": {
        const data = await hardware.getRamPressure();
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "check_storage_health": {
        const data = await hardware.getStorageHealth();
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "thermal_profile": {
        const data = await hardware.getThermalProfile();
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "diagnose_antivirus_impact": {
        const data = await hardware.getAntivirusImpact();
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "monitor_system_health": {
        const { duration_seconds = 10, interval_seconds = 2 } = args as { duration_seconds?: number; interval_seconds?: number };
        const duration = Math.min(Math.max(1, duration_seconds), 60);
        const interval = Math.min(Math.max(1, interval_seconds), duration);
        const data = await hardware.monitorSystemHealth(duration, interval);
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      content: [{ type: "text", text: `Error: ${message}` }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write(`${CONFIG.serverName} v${CONFIG.serverVersion} running on stdio\n`);
}

main().catch((error) => {
  process.stderr.write(`Fatal error: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
});
