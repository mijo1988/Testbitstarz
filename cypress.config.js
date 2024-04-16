const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl : "https://test.bitstarz.com/",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,tx,tsx}',
    setupNodeEvents(on, config) {
    },
  },
});
