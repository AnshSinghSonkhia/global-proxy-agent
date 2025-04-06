import { ProxyAgent } from 'proxy-agent';
import { logger } from '../config/logger';

export function createSmartProxyAgent(options?: { timeout?: number }) {
  const agent = new ProxyAgent({
    timeout: options?.timeout ?? 60000,
  });

  logger.debug('Created smart proxy agent.');
  return agent;
}
