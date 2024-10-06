const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
    specPattern:"cypress/integration/testapi/*.js"
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mocha", 
    overwrite: false,                   
    html: true,                         
    json: true                          
  }
});
