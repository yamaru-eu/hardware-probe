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
- **Tool:** `analyze_performance`, `analyze_ram_pressure`
- **CPU Threshold:** If `currentLoad` > 80% sustained, identify top processes and recommend actions.
- **RAM Threshold:** If `memory_used_percent` > 90%, run `analyze_ram_pressure` to analyze swap usage and top RSS processes.

### 2. Thermal & Power Bottlenecks
- **Context:** High-end hardware performing below expectations.
- **Action:** Call `thermal_profile` to check for temperature spikes or frequency clipping (throttling) and suggest environmental fixes.

### 3. Storage Performance
- **Tool:** `analyze_local_system`, `check_storage_health`
- **Action:** Monitor SSD fill rates (> 90%). Call `check_storage_health` to verify SMART status and identify legacy HDDs slowing down modern workflows.

### 4. Dev Environment & Security
- **Context:** Slow build times or "permission denied" errors on dev paths.
- **Action:** Call `diagnose_antivirus_impact` to detect EDR/Antivirus exclusion coverage on project hot paths.

### 5. Time-Bound Monitoring
- **Context:** Transient issues that happen during a specific task (e.g., "The machine slows down only when I compile" or "Inference starts fast then lags").
- **Action:** Call `monitor_system_health` with a duration (e.g., 30s) to collect statistical data (min/max/avg) while the problematic task is running.

## Workflow Integration
1. **Initial Scan:** Run `analyze_local_system` + `analyze_performance` in parallel.
2. **Identify Bottleneck:** Compare current metrics against theoretical hardware limits.
3. **Expert Advice:** Provide specific, technical remediation steps.
4. **Verification:** Confirm the fix with a follow-up performance scan.

## Available Tools (Summary)
- `analyze_local_system`: Hardware inventory.
- `analyze_performance`: Real-time performance metrics.
- `analyze_ram_pressure`: Detailed memory pressure and RSS analysis.
- `check_storage_health`: Disk SMART health and firmware status.
- `thermal_profile`: Real-time CPU/GPU thermal and frequency state.
- `diagnose_antivirus_impact`: Antivirus/EDR impact assessment.
- `monitor_system_health`: Statistical health report over a duration (time-bound monitoring).
- `check_llm_compatibility`: (BETA) LLM performance prediction (requires remote API).
- `get_llm_recommendations`: (BETA) AI model advisor (requires remote API).
- `analyze_inference_config`: Deep-dive for AI runtimes.

## Guidelines
- Correlate symptoms with empirical data.
- Provide actionable CLI commands for quick fixes.
- Protect privacy by using anonymized data for remote checks.
