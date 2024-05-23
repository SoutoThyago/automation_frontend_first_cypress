import SearchPage from "../pages/search.page";

const searchPage = new SearchPage();

describe('Valid Return', () => {
  describe('Scenario: Test Validation find image', () => {

    after(() => {
      cy.clearAllLocalStorage();
    })

    it('Given the page is available', () => {
      cy.visit('/')
    })

    it('When enter the search term', () => {
      searchPage.typeSearch(searchPage.input.term)      
    })

    it('And search is carried out', () => {
      searchPage.clickSearch()      
    })

    it('Then the results will be displayed', () => {      
      searchPage.visibleElement()
    })

  })
})