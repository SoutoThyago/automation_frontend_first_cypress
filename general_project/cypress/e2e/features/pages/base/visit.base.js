require('cypress-xpath');
require('cypress-real-events');

export default class VisitBase {
    clickElement(element) {
        element().click()
        cy.screenshot('click ' + element)
    }

    sendKey(element, text) {
        element().type(text)
        cy.screenshot('send ' + element)
    }

    mouseOver(element) {        
        cy.contains("a", element).realHover('mouse')
        cy.screenshot('houver ' + element)
    }

    visible(element) {        
        return element().should('to.be.visible').screenshot('visible ' + element)
    }
}