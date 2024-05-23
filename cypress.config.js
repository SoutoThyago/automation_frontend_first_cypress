import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  env: {
    //place to global variables
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: ('https://www.google.com/'),
    testIsolation: false
  },
});