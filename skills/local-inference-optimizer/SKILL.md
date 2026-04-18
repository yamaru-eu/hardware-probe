---
name: local-inference-optimizer
description: Expert system for analyzing local hardware/software topology and providing actionable recommendations for LLM inference.
---

# Skill: Local Inference Optimizer

Expert system for analyzing local hardware/software topology and providing actionable recommendations for LLM inference (Ollama, LM Studio, vLLM).

## Context
Use this skill when a user wants to:
1. Optimize their machine for local LLMs.
2. Troubleshoot slow inference speeds.
3. Understand why a model isn't using the GPU.
4. Calculate if a specific model/quantization will fit.

## Diagnostic Protocol

### 1. Memory Bandwidth Analysis
- **Rule:** Inference speed is directly bound by Memory Bandwidth (GB/s).
- **Heuristics:**
    - < 20 GB/s: Slow (CPU/Single Channel DDR4). Recommend small models (3B) or hardware upgrade.
    - 20-60 GB/s: Standard (Dual Channel DDR4/DDR5). Good for 7B-14B models.
    - > 100 GB/s: High Performance (Apple M-Series, Quad Channel, or High-end GPU VRAM).
- **Advice:** If `memory_bandwidth_gbs` is significantly lower than theoretical specs, suggest checking RAM slots (Dual Channel) or BIOS XMP/EXPO profiles.

### 2. VRAM & Quantization Strategy
- **Rule:** Model + KV Cache must fit in VRAM for 10x speedup.
- **Formulas:**
    - `ModelSize = (Params * Quant) / 8` (e.g., 7B @ 4-bit ≈ 3.5GB).
    - `KVCache = ContextLength * Params * 0.0000006` (Rough estimate).
- **Optimization:** If VRAM is tight, suggest reducing `num_ctx` (context length) before dropping quantization quality.

### 3. Runtime Troubleshooting (WSL/Docker/Ollama)
- **WSL2:** If `memory_limit_gb` in `.wslconfig` is < 50% of total RAM, suggest increasing it.
- **Docker:** If `hasNvidiaRuntime` is false, provide the `nvidia-container-toolkit` installation steps.
- **Environment:** If `OLLAMA_NUM_PARALLEL` is missing, suggest setting it to 2 for multi-agent workflows.

## Recommended Action Phrases
- "Your GPU driver version ({{driver}}) is outdated. Update to 550+ to enable Flash Attention."
- "I detected you are running on a slow HDD. Moving your model cache to your NVMe SSD will reduce load time from 30s to 2s."
- "You have 32GB RAM but your memory bandwidth is only 15GB/s. This suggests a Single Channel bottleneck."

## Output Format
Always provide:
1. **Current Bottleneck:** (e.g., VRAM, Memory Bandwidth, or Config).
2. **Immediate Fix:** (Software/Env var changes).
3. **Long-term Suggestion:** (Hardware/Upgrade).
