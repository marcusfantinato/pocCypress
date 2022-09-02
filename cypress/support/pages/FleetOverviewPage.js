export default class FleetOverviewPage {


    elements = {
        searchField: () => cy.get('[data-cy="search-bar"]'),
        selectBtn: () => cy.get('[data-cy="actions-cell"]')
    }

    fillFieldSearch(carrier) {

        this.elements.searchField().type(carrier).should('have.value', carrier)
    }

    clickOnSelect() {

        cy.get('[data-cy="actions-cell"]').click()
    }
}