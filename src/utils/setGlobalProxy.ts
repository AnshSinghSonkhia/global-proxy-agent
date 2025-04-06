export function setGlobalProxy(proxyUrl: string): void {
    const globalAgent = (global as any).GLOBAL_AGENT;
  
    if (!globalAgent) {
      throw new Error('GLOBAL_AGENT is not initialized. Call setupGlobalProxyAgent() first.');
    }
  
    globalAgent.HTTP_PROXY = proxyUrl;
  }
  