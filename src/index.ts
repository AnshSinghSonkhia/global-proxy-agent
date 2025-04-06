export { setupGlobalProxyAgent } from './setup';
export { bootstrap } from './bootstrap';
export { createSmartProxyAgent } from './agent/createSmartProxyAgent';
export { resolveProxyForUrl } from './agent/resolveProxyForUrl';

export {
  getCurrentProxy,
  getExcludedDomains,
  resetProxySettings,
  globalState
} from './config/state';

export {
  enableLogging,
  disableLogging,
  logger
} from './config/logger';

export { setGlobalNoProxy } from './utils/exclude';
