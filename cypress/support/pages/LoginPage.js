export default class LoginPage {

    doLogin(username, password) {
        cy.get('#UsernameOrEmail').type(username).should('have.value', username)
        cy.get('#Password').type(password)
        cy.get('#loginBtn').click()
    }

}