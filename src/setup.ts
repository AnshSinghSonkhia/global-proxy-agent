import { createSmartProxyAgent } from './agent/createSmartProxyAgent';
import { setEnvProxyConfig } from './config/env';
import { logger } from './config/logger';
import { globalState } from './config/state';
import { setGlobalNoProxy } from './utils/exclude';

export type GlobalProxyAgentOptions = {
  envNamespace?: string;
  forceGlobal?: boolean;
  timeout?: number;
  logging?: boolean;
  exclude?: string[];
  fallbackProxies?: string[];
};

export function setupGlobalProxyAgent(options: GlobalProxyAgentOptions = {}) {
  const {
    envNamespace = 'GLOBAL_AGENT_',
    forceGlobal = true,
    timeout = 60000,
    logging = false,
    exclude = [],
    fallbackProxies = [],
  } = options;

  setEnvProxyConfig(envNamespace);

  if (exclude.length) setGlobalNoProxy(exclude);

  const agent = createSmartProxyAgent({ timeout });

//   globalState.setAgent(agent);
  globalState.agent = agent;
  globalState.proxyUrl = process.env[`${envNamespace}HTTP_PROXY`] || '';
  globalState.forceGlobal = forceGlobal;
  globalState.exclude = exclude;
  globalState.logging = logging;
  globalState.fallbackProxies = fallbackProxies;

  if (forceGlobal) {
    require('http').globalAgent = agent;
    require('https').globalAgent = agent;
  }

  if (logging) logger.info('Global proxy agent set up.');
}
