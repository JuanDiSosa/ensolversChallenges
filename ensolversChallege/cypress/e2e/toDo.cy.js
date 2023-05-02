/// <reference types="cypress" />
import user from '../fixtures/data/user.json'
import homePage from '../fixtures/pages/homePage.json'
import toDoPage from '../fixtures/pages/toDoPage.json'
import promisify from 'cypress-promise'

beforeEach('login',async () => {
  cy.login(user.username, user.password)
  const messageSuccesLogIn = await promisify(cy.get(homePage.loginMessage).invoke('text'))
  expect(messageSuccesLogIn).to.equal('You are logged in as "' + user.username +'".')
})


describe('Challenge ensolvers', () => {
  
    it('Make a new To do', () => {
        cy.clickOn(homePage.manageToDoButton).then(() => {
          cy.clickOn(toDoPage.createNewToDoItem).then(() => {
            cy.typeName(toDoPage.name, 'GYM').then(() => {
              cy.typeOn(toDoPage.description, 'go to the GYM, chest day').then(() => {
                cy.clickOn(toDoPage.saveButton).then(() => {
                  cy.contains('GYM').should('be.visible')
                })
              })
            })
          })
        })
      })

    it('View To do event', () => {
      cy.clickOn(homePage.manageToDoButton).then(() => {
        cy.clickOn(toDoPage.viewButton).then(() => {
          cy.contains('GYM').should('be.visible').then(() => {
            cy.contains('juandi99').should('be.visible')
          })
        })
      })
    })

    it('Edit To do event name', () => {
      cy.clickOn(homePage.manageToDoButton).then(() => {
        cy.clickOn(toDoPage.editButton).then(() => {
          cy.typeName(toDoPage.name, 'Crossfit').then(() => {
            cy.clickOn(toDoPage.saveButton).then(() => {
              cy.contains('Crossfit').should('be.visible')
            })
          })
        })
      })
    })

    it('Delete Folder',() => {
      cy.clickOn(homePage.manageToDoButton).then(() => {
        cy.clickOn(toDoPage.deleteButton).then(() => {
          cy.clickOn(toDoPage.confirmDeleteButton).then(() => {
            cy.contains('No To Do Items found').should('be.visible')
          })
        })
      })
    })
  
    
  })
  