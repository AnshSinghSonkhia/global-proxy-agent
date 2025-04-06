import { getProxyForUrl } from 'proxy-from-env';

export function resolveProxyForUrl(url: string): string {
  return getProxyForUrl(url);
}
