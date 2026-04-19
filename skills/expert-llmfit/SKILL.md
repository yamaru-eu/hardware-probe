---
name: expert-llmfit
description: Use this skill to verify, maintain, and adapt the hardware recommendation logic (VRAM, TPS, Model specs) based on the upstream AlexsJones/llmfit Rust project.
---

# Expert LLMFit (Hardware Recommendation Engine)

This skill provides the domain expertise required to maintain the `LlmFitEngine` inside `remote-affiliate-api/src/core/llmfit.engine.ts` and keep it synchronized with the upstream logic from `https://github.com/AlexsJones/llmfit`.

## Core Concepts & Formulas

1. **Inference is Memory-Bandwidth-Bound**:
   - **Theoretical Max TPS** = `Memory Bandwidth (GB/s) / Model Size (GB)`
   - **Real TPS Estimate** = `Max TPS * Efficiency Factor (0.55)` * `RunMode Penalty`.
   - The efficiency factor (0.55) accounts for kernel launch overhead and KV-cache reads.

2. **RunMode Penalties**:
   - `gpu`: 1.0 (Full speed)
   - `moe_offload`: 0.8 (Expert switching latency)
   - `cpu_gpu`: 0.5 (Partial offload penalty)
   - `cpu_only`: 0.3 (Fallback to slow RAM)

3. **Memory Requirements (VRAM/RAM)**:
   - **Base Model Size** = `Parameters * BytesPerParam`
     - FP16/BF16: 2.0 bytes
     - Q8: 1.0 byte
     - Q4_K_M: 0.5 bytes (Standard for local inference recommendations)
   - **KV Cache Overhead**: Context length requires additional VRAM.
   - **Rule of Thumb VRAM**: `(Model Size in GB * 1.2)` to account for context and OS overhead.

4. **Mixture of Experts (MoE)**:
   - Fit/VRAM checks use **Total Parameters**.
   - Speed/TPS estimates use **Active Parameters** (e.g., Mixtral 8x7B uses ~12.9B active params per token).

## Verification & Adaptation Workflow

Whenever asked to "verify LLMFit logic" or "update the hardware recommendation engine", follow these steps:

### Step 1: Upstream Sync
- Clone the upstream repository into a temporary directory:
  ```bash
  mkdir -p /tmp/llmfit_external && git clone https://github.com/AlexsJones/llmfit /tmp/llmfit_external
  ```
- Inspect key Rust files:
  - `llmfit-core/src/fit.rs` (for TPS and scoring formulas).
  - `llmfit-core/src/hardware.rs` (for GPU bandwidth updates and compute capabilities).
  - `llmfit-core/src/models.rs` (for Quantization multipliers and MoE active parameters).

### Step 2: Codebase Audit (`remote-affiliate-api`)
- Compare the upstream formulas with our local TypeScript implementation in `src/core/llmfit.engine.ts`.
- Ensure the `estimateTokensPerSecond` method correctly applies the `0.55` efficiency factor and `RunMode` penalties.
- Verify `calculateRequiredMemory` properly uses active vs total parameters.

### Step 3: Database Metadata Alignment
- Check `prisma/schema.prisma` and `prisma/seed.ts`.
- Ensure `HardwareMetadata` table contains updated `bandwidthGBs` for new GPUs (e.g., RTX 50 series, M4 Apple Silicon).
- Ensure `LlmModel` table correctly populates `activeParametersBillions` for MoE models during HuggingFace sync (`src/services/huggingface.service.ts`).

### Step 4: Cleanup
- Remove the temporary upstream clone:
  ```bash
  rm -rf /tmp/llmfit_external
  ```

## Critical Rules
- **DO NOT** replace our TypeScript implementation with Rust code. We only port the mathematical logic and hardware constants.
- **ALWAYS** default to 4-bit quantization (`Q4_K_M`) for consumer recommendation baselines.
- **NEVER** recommend a model if its `minVramGb` exceeds the user's available `HardwareMetadata.vramGb`.
