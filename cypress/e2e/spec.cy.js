import FleetOverviewPage from "../support/pages/FleetOverviewPage"
import FleetOverviewDetailsPage from "../support/pages/FleetOverviewDetailsPage"
import LoginPage from "../support/pages/LoginPage"
import MenuPage from "../support/pages/MenuPage"

const menu = new MenuPage
const login = new LoginPage
const fleetOverview = new FleetOverviewPage
const fleetOverviewDetails = new FleetOverviewDetailsPage
let palcode
let palcode2
let txt
let txt2

describe('empty spec', () => {


  it('Checking the page "Details" in a carriers details', () => {
    cy.visit('/')
    login.doLogin('/', '/')
    menu.goToFleetOverviewPage()
    fleetOverview.fillFieldSearch('SHA TZ 68')
    fleetOverview.clickOnSelect()
    fleetOverviewDetails.checkAlias(' SHA TZ 68 ')
    fleetOverviewDetails.clickOnServicePartnerInfo()
    fleetOverviewDetails.checkServicePartnerInfo('Kurz Fahrzeugtechnik GmbH')


  })

  it('Edit the Carriers name', () => {
    cy.visit('/')
    login.doLogin('/', '/')
    menu.goToFleetOverviewPage()
    fleetOverview.fillFieldSearch('SHA TZ 68')
    fleetOverview.clickOnSelect()
    fleetOverviewDetails.checkAlias(' SHA TZ 68 ')
    fleetOverviewDetails.clickOnPencilBtn()
    fleetOverviewDetails.clickOnRenameBtn()
    fleetOverviewDetails.fillFieldAlias('SHA TZ 68 Updated')
    fleetOverviewDetails.clickOnSaveBtn()
    fleetOverviewDetails.checkAlias(' SHA TZ 68 Updated ')
    fleetOverviewDetails.clickOnPencilBtn()
    fleetOverviewDetails.clickOnRenameBtn()
    fleetOverviewDetails.fillFieldAlias('SHA TZ 68')
    fleetOverviewDetails.clickOnSaveBtn()
    fleetOverviewDetails.checkAlias(' SHA TZ 68 ')

  })



it('Get Status code', () => {
  cy.visit('/')
  login.doLogin('/', '/')

  cy.get('#cdk-overlay-4 > mat-card > div > div:nth-child(2) > button > span.mat-button-wrapper').click() 
  cy.get('div.ng-tns-c143-4.ng-star-inserted > div:nth-child(4) > div > button').click() 
  cy.get('div.overflow-auto.ng-star-inserted > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-error_code.mat-column-error_code.ng-star-inserted > div > span').then((palcode) => {
     txt = palcode.text()
    cy.log(txt)
  })

cy.get(' tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-actions.mat-column-actions.ng-star-inserted.mat-table-sticky.mat-table-sticky-border-elem-right > button').click() 

cy.get('#mat-dialog-0 > connected-palcode-detail > div.mat-dialog-content.full-height > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)').then((palcode2) => {
  txt2 = palcode2.text()
  cy.log(txt2)
  expect(txt).to.eql(txt2)
})
})

})