export default class FleetOverviewDetailsPage {


    elements = {
        alias: () => cy.get('mat-card.mat-card.mat-focus-indicator.full-height.ng-star-inserted > div:nth-child(1)'),
        pencilBtn: () => cy.get('fm-equipment > fm-equipment-details > div > h1:nth-child(2) > button'),
        renameBtn: () => cy.get('#mat-menu-panel-2 > div > button:nth-child(2)'),
        newAlias: () => cy.get('#alias'),
        saveBtn: () => cy.get('[data-cy="save-button"]'),
        servicePartnerTab: () => cy.get('#mat-tab-label-0-1'),
        servicePartnerInfo: () => cy.get('#mat-tab-content-0-1 > div > div > div')
    }

    checkAlias(alias) {

        this.elements.alias().should('have.text', alias)
    }

    clickOnPencilBtn(){

        this.elements.pencilBtn().click()

    }

    clickOnRenameBtn(){

        this.elements.renameBtn().click()
        
    }

    fillFieldAlias(alias) {

        this.elements.newAlias().clear().type(alias).should('have.value', "")
    }

    clickOnSaveBtn(){

        this.elements.saveBtn().click()

    }

    clickOnServicePartnerInfo() {

        this.elements.servicePartnerTab().click()
    }

    checkServicePartnerInfo(info) {

        this.elements.servicePartnerInfo().contains(info)
    }

}