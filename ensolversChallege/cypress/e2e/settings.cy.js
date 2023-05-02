/// <reference types="cypress" />
import user from '../fixtures/data/user.json'
import homePage from '../fixtures/pages/homePage.json'
import settingsPage from '../fixtures/pages/settingsPage.json'
import navbar from '../fixtures/pages/navBar.json'
import promisify from 'cypress-promise'

beforeEach('login',async () => {
  cy.login(user.username, user.password)
  const messageSuccesLogIn = await promisify(cy.get(homePage.loginMessage).invoke('text'))
  expect(messageSuccesLogIn).to.equal('You are logged in as "' + user.username +'".')
})


describe('Challenge ensolvers', () => {
  
      it('Change the settings and save the changes', () => {
        cy.clickOn(navbar.accountList).then(() => {
          cy.clickOn(navbar.settings).then(() => {
            cy.contains('User settings for juandi99')
            cy.typeName(settingsPage.firstname, 'Juan Diego').then(() => {
                cy.clickOn(settingsPage.saveButton)
                cy.contains('Settings saved!')
            })
          })
        })
      })
    
  })
  