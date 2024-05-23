require('cypress-xpath');
require('cypress-real-events');

export default class VisitBase {
    clickElement(element) {
        element().click()
    }

    sendKey(element, text) {
        element().type(text)
    }

    mouseOver(element) {        
        cy.contains("a", element).realHover('mouse')
    }

    visible(element) {
        return element().should('to.be.visible')      
    }
}