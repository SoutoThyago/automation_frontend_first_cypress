import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  env: {
    saveScreenshot: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: ('https://www.google.com/'),
    testIsolation: false,
  },
});