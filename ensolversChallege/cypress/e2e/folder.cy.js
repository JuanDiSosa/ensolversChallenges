/// <reference types="cypress" />
import user from '../fixtures/data/user.json'
import homePage from '../fixtures/pages/homePage.json'
import folderPage from '../fixtures/pages/folderPage.json'
import promisify from 'cypress-promise'

beforeEach('login',async () => {
  cy.login(user.username, user.password)
  const messageSuccesLogIn = await promisify(cy.get(homePage.loginMessage).invoke('text'))
  expect(messageSuccesLogIn).to.equal('You are logged in as "' + user.username +'".')
})


describe('Challenge ensolvers', () => {
  
    it('Make a new Folder', () => {
        cy.clickOn(homePage.manageFoldersButton).then(() => {
          cy.clickOn(folderPage.createNewFolder).then(() => {
            cy.typeName(folderPage.folderName, 'prueba beta').then(() => {
              cy.clickOn(folderPage.saveButton).then(() => {
                cy.contains('prueba beta').should('be.visible')
            })
          })
        })
      })
    })

    it('View Folder', () => {
      cy.clickOn(homePage.manageFoldersButton).then(() => {
        cy.clickOn(folderPage.viewButton).then(() => {
          cy.contains('prueba beta').should('be.visible').then(() => {
            cy.contains('juandi99').should('be.visible')
          })
        })
      })
    })

    it('Edit Folder name', () => {
      cy.clickOn(homePage.manageFoldersButton).then(() => {
        cy.clickOn(folderPage.editButton).then(() => {
          cy.typeOn(folderPage.folderName, 'prueba alfa').then(() => {
            cy.clickOn(folderPage.saveButton).then(() => {
              cy.contains('prueba alfa').should('be.visible')
            })
          })
        })
      })
    })

    it('Delete Folder', () => {
      cy.clickOn(homePage.manageFoldersButton).then(() => {
        cy.clickOn(folderPage.deleteButton).then(() => {
          cy.clickOn(folderPage.confirmDelete).then(() => {
            cy.contains('No To Do Items found').should('be.visible')
          })
        })
      })
    })
  
    
  })
  