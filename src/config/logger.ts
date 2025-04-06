import { Roarr as roarr } from 'roarr';

export const logger = roarr.child({ package: 'global-proxy-agent' });

export function enableLogging() {
  process.env.ROARR_LOG = 'true';
}

export function disableLogging() {
  process.env.ROARR_LOG = 'false';
}
