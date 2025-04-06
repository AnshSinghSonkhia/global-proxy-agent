import { setupGlobalProxyAgent } from './setup';

export const bootstrap = () => {
  setupGlobalProxyAgent(); // uses env vars by default
};
