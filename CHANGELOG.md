# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2026-04-19

### Changed
- **Metadata Fix**: Shortened description to comply with MCP Registry character limits (max 100).

## [1.1.1] - 2026-04-19

### Added
- **MCP Registry Support**: Added `mcpName` and `server.json` to support publication to the official Model Context Protocol registry (`modelcontextprotocol.io`).

## [1.1.0] - 2026-04-19

### Added
- **New Tool: `monitor_system_health`**: Time-bound statistical monitoring (min/max/avg) for CPU, RAM, and Thermals.
- **Advanced Diagnostics**: Added `analyze_ram_pressure`, `check_storage_health`, `thermal_profile`, and `diagnose_antivirus_impact`.
- **System Health Skill Updates**: Integrated all new tools into the `hardware-performance-expert` skill protocol.
- **Improved Monitoring**: Added support for detecting EDR/Antivirus impact on development hot paths.

### Changed
- **BETA Status**: Marked `check_llm_compatibility` and `get_llm_recommendations` as **BETA** as they depend on a remote API connection.

## [1.0.4] - 2026-04-18

### Added
- **Expert System Integration**: Transitioned from a simple probe to a full performance diagnostic engine.
- **New Skill: `hardware-performance-expert`**: Added a comprehensive protocol for system health, thermal throttling detection, and resource troubleshooting.
- **Enhanced LLM Optimization**: Refined the `local-inference-optimizer` skill with deep heuristics for VRAM and bandwidth analysis.
- **Rich MCP Descriptions**: Updated extension metadata for better tool discovery and intent matching.

## [1.0.3] - 2026-03-29

### Added
- Initial public release on GitHub Packages and npmjs.
- Automated public mirroring workflow.
- Hardware probe functionality for CPU, RAM, GPU, and storage.
- Anonymization of unique hardware identifiers.
- Basic test suite using Vitest.
- MCP SDK integration.
