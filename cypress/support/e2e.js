// // ***********************************************************
// // This example support/index.js is processed and
// // loaded automatically before your test files.
// //
// // This is a great place to put global configuration and
// // behavior that modifies Cypress.
// //
// // You can change the location of this file or turn off
// // automatically serving support files with the
// // 'supportFile' configuration option.
// //
// // You can read more here:
// // https://on.cypress.io/configuration
// // ***********************************************************

// // Import commands.js using ES2015 syntax:
// import './commands'


// require('cypress-xpath')
// require('cypress-plugin-tab')


// // Alternatively you can use CommonJS syntax:
// // require('./commands')

// Cypress.SelectorPlayground.defaults({
//     //selectorPriority: ['id','data-testid', 'class', 'attributes','data-cy','data-test','tag','nth-child']
//     selectorPriority: ['id','data-testid', 'class', 'attributes','data-cy','data-test','tag','nth-child']
//   })

//   Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })
// import './commands'
Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-testid','id', 'class', 'attributes','data-cy','data-test','tag','nth-child']
  })
// //div[@class='sc-fzppAM dGqCsv sc-plVjM bSPsdV']//div[@class='sc-ptDSg jEWhtg']//*[local-name()='svg']