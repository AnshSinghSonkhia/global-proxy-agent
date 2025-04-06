import type { Agent } from 'http';

type GlobalState = {
  agent?: Agent;
  proxyUrl?: string;
  exclude: string[];
  forceGlobal: boolean;
  logging: boolean;
  fallbackProxies: string[];
};

export const globalState: GlobalState = {
  agent: undefined,
  proxyUrl: '',
  exclude: [],
  forceGlobal: true,
  logging: false,
  fallbackProxies: [],
};

export function setAgent(agent: Agent) {
  globalState.agent = agent;
}

export function getCurrentProxy(): string {
  return globalState.proxyUrl ?? '';
}

export function getExcludedDomains(): string[] {
  return globalState.exclude;
}

export function resetProxySettings() {
  globalState.agent = undefined;
  globalState.proxyUrl = '';
  globalState.exclude = [];
  globalState.forceGlobal = true;
  globalState.logging = false;
  globalState.fallbackProxies = [];
}
