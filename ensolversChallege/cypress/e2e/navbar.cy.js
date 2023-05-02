/// <reference types="cypress" />
import user from '../fixtures/data/user.json'
import homePage from '../fixtures/pages/homePage.json'
import navbar from '../fixtures/pages/navBar.json'
import promisify from 'cypress-promise'

beforeEach('login',async () => {
  cy.login(user.username, user.password)
  const messageSuccesLogIn = await promisify(cy.get(homePage.loginMessage).invoke('text'))
  expect(messageSuccesLogIn).to.equal('You are logged in as "' + user.username +'".')
})


describe('Challenge ensolvers', () => {
  
    it('Navegate to the to do section by navbar', () => {
        cy.clickOn(navbar.manageList).then(() => {
          cy.clickOn(navbar.manageListToDo).then(() => {
            cy.contains('To Do Items').should('be.visible')
            cy.clickOn(navbar.homeButton).then(() => {
              cy.get(homePage.homeMessage).should(
                "have.text",
                "Welcome to Ensolvers QA Challenge!"
              );
            })
          })
        })
      })

      it('Navegate to the folder section by navbar', () => {
        cy.clickOn(navbar.manageList).then(() => {
          cy.clickOn(navbar.manageListFolder).then(() => {
            cy.contains('Folders').should('be.visible')
            cy.clickOn(navbar.homeButton).then(() => {
              cy.get(homePage.homeMessage).should(
                "have.text",
                "Welcome to Ensolvers QA Challenge!"
              );
            })
          })
        })
      })

      it('Navegate to the settings section by navbar', () => {
        cy.clickOn(navbar.accountList).then(() => {
          cy.clickOn(navbar.settings).then(() => {
            cy.contains('User settings for juandi99').should('be.visible')
          })
        })
      })

      it('Log out', () => {
        cy.clickOn(navbar.accountList).then(() => {
          cy.clickOn(navbar.logout).then(() => {
            cy.contains('Logged out successfully!').should('be.visible')
          })
        })
      })
    
  })
  