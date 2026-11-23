const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './example/tests',
  testMatch: 'storybook.web.spec.js',
  outputDir: './.validation/storybook-browser',
  workers: 1,
  timeout: 120000,
  expect: { timeout: 15000 },
  reporter: 'list',
  use: {
    browserName: 'chromium',
    baseURL: 'http://localhost:8191',
    viewport: { width: 1440, height: 1000 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
      : {},
  },
  webServer: {
    command: 'npm --prefix example run web -- --port 8191 --localhost',
    env: { BROWSER: 'none', CI: '1' },
    url: 'http://localhost:8191',
    reuseExistingServer: false,
    timeout: 120000,
  },
});
