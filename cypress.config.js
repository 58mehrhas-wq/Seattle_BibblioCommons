const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 80000,
  env: {
    url: "https://seattle.bibliocommons.com/user/login?destination=%2Fdashboard%2Fuser_dashboard"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
