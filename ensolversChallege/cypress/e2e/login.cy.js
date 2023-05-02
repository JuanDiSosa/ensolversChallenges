/// <reference types="cypress" />
import user from '../fixtures/data/user.json'
import homePage from '../fixtures/pages/homePage.json'
import loginPage from '../fixtures/pages/loginPage.json'
import promisify from 'cypress-promise'



describe('Challenge ensolvers', () => {
  it('login with correct user',async () => {
      cy.login(user.username, user.password)
      const messageSuccesLogIn = await promisify(cy.get(homePage.loginMessage).invoke('text'))
      expect(messageSuccesLogIn).to.equal('You are logged in as "' + user.username +'".')
    })
  
    it('login with wrong user',async () => {
      cy.login('juandi10', user.password)
      const message = await promisify(cy.get(loginPage.errorMessage).invoke('text'))
      expect(message).to.equal(loginPage.messageWrongSingIn)
    })
  
    
  })
  