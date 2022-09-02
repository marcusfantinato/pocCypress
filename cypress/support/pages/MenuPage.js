export default class MenuPage {

    goToFleetOverviewPage() {
        cy.get('#cdk-overlay-4 > mat-card > div > div:nth-child(2) > button > span.mat-button-wrapper').click() 
        cy.get('div > div.ng-tns-c143-4.ng-star-inserted > div:nth-child(2) > div > button').click() 
    }
}