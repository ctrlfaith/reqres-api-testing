const { defineConfig } = require('@playwright/test');
const USER_CONFIG = require('./config/user.config');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  use: {
    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'x-api-key': USER_CONFIG.API_KEY,
      'X-Reqres-Env': 'prod',
    },
  },
});