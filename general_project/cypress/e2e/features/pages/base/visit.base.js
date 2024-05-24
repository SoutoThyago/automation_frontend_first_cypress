require('cypress-xpath');
require('cypress-real-events');

export default class VisitBase {
    clickElement(element) {
        element().click()

        if (Cypress.env('saveScreenshot')) { cy.screenshot('click in: ' + element) }
    }

    sendKey(element, text) {
        element().type(text)
        if (Cypress.env('saveScreenshot')) { cy.screenshot('send key: ' + element) }
    }

    mouseOver(element) {        
        cy.contains("a", element).realHover('mouse')
        if (Cypress.env('saveScreenshot')) { cy.screenshot('mouse houver: ' + element) }
    }

    visible(element) { 
        if (Cypress.env('saveScreenshot')) { cy.screenshot('visible element: ' + element) }
        element().should('be.visible')
    }
}