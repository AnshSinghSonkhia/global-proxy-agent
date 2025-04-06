export { setupGlobalProxyAgent } from './setup';
export { bootstrap } from './bootstrap';

export { createSmartProxyAgent } from './agent/createSmartProxyAgent';
export { resolveProxyForUrl } from './agent/resolveProxyForUrl';

export { setGlobalProxy } from './utils/setGlobalProxy';
export { setGlobalNoProxy } from './utils/exclude';

export {
    globalState,
    setAgent,
    getCurrentProxy,
    getExcludedDomains,
    resetProxySettings,
} from './config/state';

export {
  enableLogging,
  disableLogging,
  logger
} from './config/logger';

