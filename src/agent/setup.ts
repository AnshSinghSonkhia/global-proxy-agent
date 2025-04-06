import { bootstrap } from '../bootstrap';

/**
 * Initializes the global proxy agent with environment variables.
 * This sets up the global.GLOBAL_AGENT object and intercepts HTTP/HTTPS requests.
 */
export function setupGlobalProxyAgent(): void {
  bootstrap();
}
