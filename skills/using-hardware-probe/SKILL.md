---
name: hardware-performance-expert
description: Expert system for hardware analysis, real-time performance troubleshooting, and LLM optimization.
---

# Skill: Hardware & Performance Expert

This skill is your primary expert for everything related to your machine's physical capabilities and real-time health. It provides deep diagnostics and actionable solutions for performance bottlenecks.

## When to use
Activate this skill whenever you need to:
1. **Inventory:** Get a detailed report of the local hardware (CPU, RAM, GPU, OS).
2. **Troubleshoot:** Resolve slowness, high resource usage, or thermal throttling.
3. **AI Optimization:** Evaluate LLM compatibility and optimize inference speeds.
4. **Upgrades:** Get technical recommendations for hardware improvements.

## Performance Troubleshooting Protocol

### 1. Resource Saturation Analysis
- **Tool:** `analyze_performance`
- **CPU Threshold:** If `currentLoad` > 80% sustained, identify top processes and recommend actions.
- **RAM Threshold:** If `memory_used_percent` > 90%, analyze memory pressure and swap usage.

### 2. Thermal & Power Bottlenecks
- **Context:** High-end hardware performing below expectations.
- **Action:** Check for CPU frequency clipping (throttling) and suggest environmental fixes.

### 3. Storage Performance
- **Tool:** `analyze_local_system`
- **Action:** Monitor SSD fill rates (> 90%) and identify legacy HDDs slowing down modern workflows.

## Workflow Integration
1. **Initial Scan:** Run `analyze_local_system` + `analyze_performance` in parallel.
2. **Identify Bottleneck:** Compare current metrics against theoretical hardware limits.
3. **Expert Advice:** Provide specific, technical remediation steps.
4. **Verification:** Confirm the fix with a follow-up performance scan.

## Available Tools (Summary)
- `analyze_local_system`: Hardware inventory.
- `analyze_performance`: Real-time performance metrics.
- `check_llm_compatibility`: LLM performance prediction.
- `get_llm_recommendations`: AI model advisor.
- `analyze_inference_config`: Deep-dive for AI runtimes.

## Guidelines
- Correlate symptoms with empirical data.
- Provide actionable CLI commands for quick fixes.
- Protect privacy by using anonymized data for remote checks.
