// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('clickOn', (locator)  => { 
  cy.get(locator).should('be.visible').click({ force: true }) 
})

Cypress.Commands.add('typeOn', (locator, text) => { 
  cy.get(locator).should('be.visible').clear().type(text) 
})
Cypress.Commands.add('typeName', (locator, text) => { 
  cy.wait(300)
  cy.get(locator).should('be.visible').clear().type(text) 
})

Cypress.Commands.add('login', (username, password) => { 
    cy.visit('https://qa-challenge.ensolvers.com/').then(() => {
      cy.typeOn('[data-cy="username"]', username)
      cy.typeOn('[data-cy="password"]', password)
      cy.clickOn('[data-cy="submit"]') 
    })
 })