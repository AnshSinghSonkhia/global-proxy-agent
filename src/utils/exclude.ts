export function setGlobalNoProxy(domains: string[]) {
    process.env.NO_PROXY = domains.join(',');
  }
  