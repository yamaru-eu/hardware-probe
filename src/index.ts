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

// ---------------------------------------------------------------------------
// Tool Definitions
// ---------------------------------------------------------------------------

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "analyze_local_system",
        description:
          "Reads the hardware specifications of the local machine: CPU, RAM, motherboard and OS. Returns a structured JSON object. No arguments required.",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "analyze_performance",
        description:
          "Provides real-time system performance: CPU load, memory usage, and the top 5 most demanding processes. Useful for identifying performance bottlenecks.",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "check_software_compatibility",
        description:
          "Checks if the local machine is compatible with a specific software or game. Analyzes CPU, GPU, RAM, and Storage requirements. Returns a compatibility report and upgrade suggestions.",
        inputSchema: {
          type: "object",
          properties: {
            software_name: {
              type: "string",
              description: "The name of the software or game to check (e.g. 'Cyberpunk 2077', 'Adobe Premiere Pro').",
            },
          },
          required: ["software_name"],
        },
      },
      {
        name: "get_hardware_recommendation",
        description:
          "Analyzes the local machine specs and sends them along with the user query and budget to the remote recommendation API. Returns a list of compatible hardware products with affiliate links.",
        inputSchema: {
          type: "object",
          properties: {
            user_query: {
              type: "string",
              description: "What the user wants to upgrade or buy (e.g. 'I need more RAM for video editing').",
            },
            budget: {
              type: "number",
              description: "Maximum budget in euros (or local currency).",
            },
          },
          required: ["user_query", "budget"],
        },
      },
      {
        name: "check_llm_compatibility",
        description: "Checks if a specific LLM model can run on this machine. Returns optimal quantization, estimated tokens per second, and execution mode (GPU, CPU+GPU, or CPU only).",
        inputSchema: {
          type: "object",
          properties: {
            model_name: {
              type: "string",
              description: "LLM model name (e.g., 'Llama 3.1 70B', 'Mixtral 8x7B', 'Qwen 2.5 Coder 32B')"
            }
          },
          required: ["model_name"]
        }
      },
      {
        name: "get_llm_recommendations",
        description: "Recommends the best LLM models that can run locally on this machine, ranked by compatibility score. Can be filtered by use case: general, coding, reasoning, chat, or embedding.",
        inputSchema: {
          type: "object",
          properties: {
            use_case: {
              type: "string",
              enum: ["general", "coding", "reasoning", "chat", "embedding", "multimodal"],
              description: "Use case to weight recommendations (default: general)"
            },
            limit: {
              type: "number",
              description: "Maximum number of recommendations (default: 5)"
            }
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

      case "check_software_compatibility": {
        const { software_name } = args as { software_name: string };
        if (!software_name) throw new Error("software_name is required");
        
        const specs = await hardware.getLocalSpecs();
        const data = await api.checkSoftwareCompatibility(specs, software_name);
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "get_hardware_recommendation": {
        const { user_query, budget } = args as { user_query: string; budget: number };
        if (!user_query || budget === undefined) throw new Error("user_query and budget are required");
        
        const specs = await hardware.getLocalSpecs();
        const data = await api.getHardwareRecommendation(specs, user_query, budget);
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }

      case "check_llm_compatibility": {
        const { model_name } = args as { model_name: string };
        if (!model_name) throw new Error("model_name is required");
        
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

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write(`${CONFIG.serverName} v${CONFIG.serverVersion} running on stdio\n`);
}

main().catch((error) => {
  process.stderr.write(`Fatal error: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
});
