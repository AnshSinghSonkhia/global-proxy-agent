# global-proxy-agent

A universal proxy agent for Node.js that combines environment-variable-based proxy resolution with smart protocol-aware agent selection. Automatically supports HTTP, HTTPS, SOCKS, and PAC proxies using a modular, runtime-configurable approach.

Additionally, `global-proxy-agent` includes a powerful `CLI` for managing proxy settings directly from the terminal. This allows users to configure proxies, excluded domains, and logging without writing any code.

## Installation

To install `global-proxy-agent`, use npm:

```bash
npm install global-proxy-agent
```

Or with Yarn:

```bash
yarn add global-proxy-agent
```

Here’s a **README usage section** for all your exported functions, written clearly for users who will import and use your package:

---

## 📦 Usage

### 1. `setupGlobalProxyAgent()`
Initializes the global proxy agent system. Should be called before using any global proxy features.

```ts
import { setupGlobalProxyAgent } from 'global-proxy-agent';

setupGlobalProxyAgent();
```

---

### 2. `bootstrap()`
Bootstraps the proxy settings using environment variables (`HTTP_PROXY`, `HTTPS_PROXY`, `NO_PROXY`, etc).

```ts
import { bootstrap } from 'global-proxy-agent';

bootstrap();
```

---

### 3. `createSmartProxyAgent(url: string): Agent`
Creates an HTTP(S) agent for a specific request URL, using the appropriate proxy.

```ts
import { createSmartProxyAgent } from 'global-proxy-agent';

const agent = createSmartProxyAgent('https://example.com');
```

---

### 4. `resolveProxyForUrl(url: string): string`
Returns the resolved proxy URL that would be used for the given request URL.

```ts
import { resolveProxyForUrl } from 'global-proxy-agent';

const proxy = resolveProxyForUrl('https://example.com');
console.log(proxy); // e.g., http://myproxy.com:8080
```

---

### 5. `setGlobalProxy(proxyUrl: string)`
Dynamically sets or updates the global proxy at runtime.

```ts
import { setGlobalProxy } from 'global-proxy-agent';

setGlobalProxy('http://my-new-proxy.com:8080');
```

---

### 6. `setGlobalNoProxy(domains: string[])`
Sets domains to be excluded from the proxy (similar to `NO_PROXY` behavior).

```ts
import { setGlobalNoProxy } from 'global-proxy-agent';

setGlobalNoProxy(['localhost', 'example.com']);
```

---

### 7. `globalState`
Access to internal config (not typically needed by end users, but useful for debugging or advanced use cases).

```ts
import { globalState } from 'global-proxy-agent';

console.log(globalState.proxyUrl);
```

---

### 8. `setAgent(agent: Agent)`
Override the global agent manually.

```ts
import { setAgent } from 'global-proxy-agent';
import { Agent } from 'http';

const customAgent = new Agent();
setAgent(customAgent);
```

---

### 9. `getCurrentProxy(): string`
Returns the current global proxy URL.

```ts
import { getCurrentProxy } from 'global-proxy-agent';

console.log(getCurrentProxy()); // e.g., 'http://proxy:3128'
```

---

### 10. `getExcludedDomains(): string[]`
Returns the list of domains excluded from proxying.

```ts
import { getExcludedDomains } from 'global-proxy-agent';

console.log(getExcludedDomains()); // ['localhost', 'example.com']
```

---

### 11. `resetProxySettings()`
Resets all proxy settings to defaults.

```ts
import { resetProxySettings } from 'global-proxy-agent';

resetProxySettings();
```

---

### 12. `enableLogging() / disableLogging()`
Enables or disables internal debug logging.

```ts
import { enableLogging, disableLogging } from 'global-proxy-agent';

enableLogging();  // Turn on logs
disableLogging(); // Turn off logs
```

---

### 13. `logger`
Access the internal logger (uses `console.log` by default, can be customized).

```ts
import { logger } from 'global-proxy-agent';

logger.log('Custom debug message');
```

---

# CLI Usage

The `global-proxy-agent` provides a command-line interface to manage your proxy settings easily via terminal.

### 📥 Install Globally (optional)

```bash
npm install -g global-proxy-agent
```

Or use via `npx` without installing:

```bash
npx global-proxy-agent <command>
```

---

### 🧾 Commands

#### `set-proxy <proxyUrl>`

Set the global proxy dynamically.

```bash
global-proxy-agent set-proxy http://my-proxy.com:3128
```

#### `unset-proxy`

Remove the global proxy configuration.

```bash
global-proxy-agent unset-proxy
```

#### `set-no-proxy <domains>`

Specify comma-separated domains to exclude from proxying.

```bash
global-proxy-agent set-no-proxy localhost,example.com
```

#### `show-config`

View the current proxy configuration and excluded domains.

```bash
global-proxy-agent show-config
```

#### `reset`

Reset all proxy settings to their default state.

```bash
global-proxy-agent reset
```

#### `enable-logging`

Enable verbose logging for debugging.

```bash
global-proxy-agent enable-logging
```

#### `disable-logging`

Turn off verbose logging.

```bash
global-proxy-agent disable-logging
```

---

### 📌 Example

```bash
# Set proxy
global-proxy-agent set-proxy http://proxy.local:8080

# Exclude local dev domains
global-proxy-agent set-no-proxy localhost,dev.local

# Check current settings
global-proxy-agent show-config
```

---