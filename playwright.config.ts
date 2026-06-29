import { defineConfig, devices } from '@playwright/test';

// `process` exists at runtime (Node); declared here so this standalone config file
// type-checks without depending on @types/node being in scope.
declare const process: { env: Record<string, string | undefined> };

// Runs locally (`npm run e2e`) and in CI on pull requests (.github/workflows/e2e.yml).
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:4173/portfolio/',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173',
    url: 'http://localhost:4173/portfolio/',
    reuseExistingServer: !isCI,
    timeout: 120_000,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
