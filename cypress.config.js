const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  viewportWidth: 1366,
  viewportHeight: 768,
  video: false,
  chromeWebSecurity: false,
  experimentalNetworkStubbing: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
    },
    
    experimentalSessionAndOrigin: true,
    "defaultCommandTimeout": 30000 
  },
})