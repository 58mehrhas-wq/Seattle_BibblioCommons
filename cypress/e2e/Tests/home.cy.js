/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage";

const loginPage = new LoginPage()
describe('Login Page demo spec', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  // Data are stored in the example.json file
  let signUpdata
  before(() => {
    // runs once before all tests in the block
    cy.fixture('example').then((data) => {
      signUpdata = data;
    })

  }),
    it('FU-01 & FU-05 Incorrect login credentials', () => {
      cy.visit(Cypress.env('url'))

      // Assert the logo on the page appears
      loginPage.logo().should('be.visible')

      // Enter the username
      loginPage.userName().type(signUpdata.username)

      // Enter the pin
      loginPage.pin().type(signUpdata.pin)

      // Check the Remember me Checkbox
      // loginPage.rememberMeCheck().click()
      loginPage.rememberMeCheck().check().should('be.checked')

      // Click on the Login Button
      loginPage.loginBtn().click()

      // Verify the popup message with its text appearing
      loginPage.popupMsg().each(($el, index, $list) => {
        const text = $el.text()
        if (text.includes("PIN")) {
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg1)
        }
        else
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg2)
      })
    }),
    it('FU-03 Forgot your pin', () => {
      cy.visit(Cypress.env('url'))

      loginPage.logo()

      loginPage.userName().type(signUpdata.username)

      loginPage.forgotPin().click()

      loginPage.barcodeField().type(signUpdata.barcode)

      loginPage.sendBtn().click()

      loginPage.popupMsg().should('have.text', signUpdata.confirmPopup)
    }),

    it('FU-04 & UI-07 Back and Forward buttons and links to other pages', () => {
      cy.visit(Cypress.env('url'))

      loginPage.logo().should('exist')

      // Home button
      loginPage.homeBtn().click()

      loginPage.recentStaffLists().should('have.text', signUpdata.recentStaffLists)

      cy.go('back')
      cy.go('forward')
      cy.go('back')


      loginPage.exploreArrow()
      loginPage.newTitles().should('have.text', 'New Titles')
      
      loginPage.booksNMore()
      loginPage.whatsNew().should('have.text', "What's New")

    }),
    it('FU-07 & FU-08 Minimum & Maximum length of characters and other combinations', () => {

      cy.visit(Cypress.env('url'))

      loginPage.logo().should('exist')
      // Login with a one character in both username & pin
      // *******************************************************
      loginPage.userName().type(signUpdata.shortUsername)

      loginPage.pin().type(signUpdata.shortPin)

      loginPage.loginBtn().click()
      loginPage.popupMsg().each(($el, index, $list) => {
        const text = $el.text()
        if (text.includes("PIN")) {
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg1)
        }
        else
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg2)
      })
      // Login with long username & pin
      // *********************************************************************
      loginPage.userName().clear().type(signUpdata.longUsername)

      loginPage.pin().clear().type(signUpdata.longPin)

      loginPage.loginBtn().click()
      loginPage.popupMsg().each(($el, index, $list) => {
        const text = $el.text()
        if (text.includes("PIN")) {
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg1)
        }
        else
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg2)
      })
      // Login with blank pin
      // *******************************************************************************

      loginPage.userName().clear().type(signUpdata.username)

      loginPage.pin().clear().type(" ")

      loginPage.loginBtn().click()


      loginPage.popupMsg().each(($el, index, $list) => {
        const text = $el.text()
        if (text.includes("PIN")) {
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg1)
        }
        else
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg2)

      })
      // Login with blank username
      // *****************************************************************************

      loginPage.userName().clear().type(" ")

      loginPage.pin().clear().type(signUpdata.pin)

      loginPage.loginBtn().click()


      loginPage.popupMsg().each(($el, index, $list) => {
        const text = $el.text()
        if (text.includes("PIN")) {
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg1)
        }
        else
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg2)
      })

      // Login with both blank username & pin
      // ************************************************************
      loginPage.userName().clear().type(" ")

      loginPage.pin().clear().type(" ")

      loginPage.loginBtn().click()

      loginPage.popupMsg().each(($el, index, $list) => {
        const text = $el.text()
        if (text.includes("PIN")) {
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg1)
        }
        else
          loginPage.popupMsg().should('have.text', signUpdata.popupmsg2)
      })
    }),

    it('UI-08 Reponsiveness of the login page', () => {

      cy.visit(Cypress.env('url'))

      loginPage.maximize()

      loginPage.minimize()

      cy.scrollTo(0, 300)

      loginPage.maximize()

      loginPage.minimize()

      cy.scrollTo(0, 300)

    })

})