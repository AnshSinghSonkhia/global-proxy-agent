export function setEnvProxyConfig(namespace: string) {
    const HTTP = process.env[`${namespace}HTTP_PROXY`];
    const HTTPS = process.env[`${namespace}HTTPS_PROXY`];
    const NO_PROXY = process.env[`${namespace}NO_PROXY`];
  
    if (HTTP) process.env.HTTP_PROXY = HTTP;
    if (HTTPS) process.env.HTTPS_PROXY = HTTPS;
    if (NO_PROXY) process.env.NO_PROXY = NO_PROXY;
  }
  