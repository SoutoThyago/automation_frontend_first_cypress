require('cypress-xpath');

import VisitBase from './base/visit.base';

export default class SearchPage extends VisitBase{

  elements = {
    fieldSearch:  () => cy.get('#APjFqb'),
    buttonSearch: () => cy.xpath('(//input[@class="gNO89b"])[1]'),
    fieldTitle:   () => cy.xpath('(//div[@class="PZPZlf ssJ7i B5dxMb" and contains(text(), "Dinossauro")])[1]')
  }

  input = {
    term: 'dinossauro',
  }

  typeSearch(text) {
    if (!text) return;
    this.sendKey(this.elements.fieldSearch, text)
  }

  clickSearch() {
    this.clickElement(this.elements.buttonSearch)
  }

  mouseOverElement() {
    this.mouseOver(this.elements.linkMoreImages)
  }

  visibleElement(element) {    
    this.visible(element)
  }

}