#!/usr/bin/env node

import { Command } from 'commander';
import { bootstrap } from '../bootstrap';
import { setupGlobalProxyAgent } from '../setup';
import { setGlobalProxy } from '../utils/setGlobalProxy';
import { setGlobalNoProxy } from '../utils/exclude';
import { enableLogging, disableLogging } from '../config/logger';
import { resetProxySettings, getCurrentProxy, getExcludedDomains } from '../config/state';

const program = new Command();

program
  .name('global-proxy-agent')
  .description('A smart global proxy agent CLI')
  .version('1.0.0');

program
  .command('setup')
  .description('Initialize and set up global proxy agent')
  .action(() => {
    setupGlobalProxyAgent();
    console.log('Proxy agent setup complete.');
  });

program
  .command('bootstrap')
  .description('Run the bootstrap configuration')
  .action(() => {
    bootstrap();
    console.log('Bootstrap initialized.');
  });

program
  .command('set-proxy <url>')
  .description('Set a new global proxy URL')
  .action((url) => {
    setGlobalProxy(url);
    console.log(`Global proxy set to: ${url}`);
  });

program
  .command('set-no-proxy <list>')
  .description('Set domains to be excluded from proxying (comma-separated)')
  .action((list) => {
    const domains = list.split(',');
    setGlobalNoProxy(domains);
    console.log(`No-proxy domains set: ${domains.join(', ')}`);
  });

program
  .command('enable-logging')
  .description('Enable proxy debugging logs')
  .action(() => {
    enableLogging();
    console.log('Logging enabled.');
  });

program
  .command('disable-logging')
  .description('Disable proxy debugging logs')
  .action(() => {
    disableLogging();
    console.log('Logging disabled.');
  });

program
  .command('reset')
  .description('Reset all proxy settings to default')
  .action(() => {
    resetProxySettings();
    console.log('All proxy settings reset.');
  });

program
  .command('status')
  .description('Print current proxy settings')
  .action(() => {
    const proxy = getCurrentProxy();
    const excluded = getExcludedDomains();
    console.log('Current Proxy:', proxy || 'None');
    console.log('Excluded Domains:', excluded.length > 0 ? excluded.join(', ') : 'None');
  });

program.parse(process.argv);
