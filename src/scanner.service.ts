import { exec } from 'child_process';
import { promisify } from 'util';
import os from 'os';
import fs from 'fs';

const execAsync = promisify(exec);

export type TrustLevel = 'high' | 'medium' | 'low' | 'heuristic';

export interface ScanResult<T> {
  value: T;
  method: string;
  trust: TrustLevel;
}

export class InferenceScanner {
  /**
   * Scan GPU with multiple fallback levels
   */
  async scanGPU(): Promise<ScanResult<any>> {
    // Level 1: NVIDIA SMI
    try {
      const { stdout } = await execAsync('nvidia-smi --query-gpu=name,memory.total,driver_version --format=csv,noheader,nounits');
      const [name, vram, driver] = stdout.split(',').map(s => s.trim());
      return {
        value: { name, vramGb: parseInt(vram) / 1024, driver, type: 'NVIDIA' },
        method: 'nvidia-smi',
        trust: 'high'
      };
    } catch (e) {}

    // Level 2: macOS Metal / Apple Silicon
    if (os.platform() === 'darwin') {
      try {
        const { stdout } = await execAsync('system_profiler SPDisplaysDataType');
        if (stdout.includes('Apple M')) {
          const modelMatch = stdout.match(/Chip: (Apple M\d+.*)/);
          const vramMatch = stdout.match(/Memory: (\d+) GB/);
          return {
            value: { 
              name: modelMatch ? modelMatch[1] : 'Apple Silicon', 
              vramGb: vramMatch ? parseInt(vramMatch[1]) : 0, 
              type: 'Apple' 
            },
            method: 'system_profiler',
            trust: 'high'
          };
        }
      } catch (e) {}
    }

    // Level 3: Windows WMIC Fallback
    if (os.platform() === 'win32') {
      try {
        const { stdout } = await execAsync('wmic path win32_VideoController get name, adapterram');
        const lines = stdout.trim().split('\n').slice(1);
        if (lines.length > 0) {
          const [name, ram] = lines[0].trim().split(/\s{2,}/);
          return {
            value: { name, vramGb: parseInt(ram) / (1024 ** 3), type: 'Unknown' },
            method: 'wmic',
            trust: 'medium'
          };
        }
      } catch (e) {}
    }

    return { value: null, method: 'none', trust: 'low' };
  }

  /**
   * Scan Memory Bandwidth (Light Benchmark)
   */
  async estimateBandwidth(): Promise<ScanResult<number>> {
    const start = Date.now();
    const size = 100 * 1024 * 1024; // 100MB
    const buffer = Buffer.alloc(size);
    const target = Buffer.alloc(size);
    
    // Simuler un accès mémoire intensif
    for (let i = 0; i < 5; i++) {
      buffer.copy(target);
    }
    
    const duration = (Date.now() - start) / 1000;
    const gbTransferred = (size * 5) / (1024 ** 3);
    const bandwidth = gbTransferred / duration;

    return {
      value: parseFloat(bandwidth.toFixed(2)),
      method: 'memcpy_benchmark',
      trust: 'medium'
    };
  }

  /**
   * Scan for ML Runtimes & Configs
   */
  async scanRuntimes(): Promise<any> {
    const results: any = {
      ollama: { installed: false, running: false, version: null },
      docker: { installed: false, hasNvidiaRuntime: false },
      wsl: { active: false, config: null }
    };

    // Check Ollama
    try {
      const { stdout } = await execAsync('ollama --version');
      results.ollama.installed = true;
      results.ollama.version = stdout.trim();
    } catch (e) {}

    // Check Docker Configs (Fallback to file exist check)
    if (os.platform() !== 'win32') {
      results.docker.installed = fs.existsSync('/var/run/docker.sock');
      if (fs.existsSync('/etc/docker/daemon.json')) {
        const content = fs.readFileSync('/etc/docker/daemon.json', 'utf-8');
        results.docker.hasNvidiaRuntime = content.includes('nvidia');
      }
    }

    // Check WSL Config
    if (os.platform() === 'win32') {
      const wslConfigPath = `${process.env.USERPROFILE}\\.wslconfig`;
      if (fs.existsSync(wslConfigPath)) {
        results.wsl.active = true;
        results.wsl.config = fs.readFileSync(wslConfigPath, 'utf-8');
      }
    }

    return results;
  }

  /**
   * Scan Environment Variables
   */
  scanEnvVars(): Record<string, string> {
    const relevantPrefixes = ['OLLAMA_', 'CUDA_', 'HIP_', 'HUGGINGFACE_', 'HF_'];
    const found: Record<string, string> = {};
    
    for (const [key, value] of Object.entries(process.env)) {
      if (relevantPrefixes.some(p => key.startsWith(p)) && value) {
        found[key] = value;
      }
    }
    return found;
  }
}
