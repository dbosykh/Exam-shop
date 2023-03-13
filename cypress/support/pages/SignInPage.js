import BasePage from "./BasePage"

class SignInPage extends BasePage {

    visit() {
        cy.log('Open website login page');
        cy.visit('/#/login');
    }

    closeWelcomeBanner(){
        return cy.get('[aria-label="Close Welcome Banner"]')
    }

    closeCookiesMessage(){
        return cy.get('[aria-label="dismiss cookie message"]')
    }

    checkIfUserUnauthorized(){
        return cy.getCookie('customer').should('be.null')
    }

    leaveEmailFieldEmpty(){
        return cy.get('#email')
    }

    leavePasswordFieldEmpty(){
        return cy.get('#password')
    }


    checkIfEmailFieldIsRequired(){
        return cy.get('#mat-error-0').should('contain', 'Please provide an email address.')
    }

    checkIfPasswordFieldIsRequired(){
        return cy.get('#mat-error-1').should('contain', 'Please provide a password.')
    }

    enterInvalidEmail(){
        return cy.get('#email')
    }

    enterInvalidPassword(){
        return cy.get('#password')
    }

    clickLoginButton(){
        return cy.get('#loginButton')
    }

    checkErrorInvalidCredentials(){
        return cy.get('.error.ng-star-inserted').should('contain', 'Invalid email or password.')
    }

    enterValidEmail(){
        return cy.get('#email')
    }

    enterValidPassword(){
        return cy.get('#password')
    }

    checkRememberMeCheckbox(){
        return cy.get('#rememberMe-input')
    }

    clickLoginButton(){
        return cy.get('#loginButton')
    }

    closePopups(){
        this.closeWelcomeBanner().click()
        this.closeCookiesMessage().click()
    }

    checkCookies(){
        this.checkIfUserUnauthorized()
    }

    leaveRequiredFieldsEmpty(){
        this.leaveEmailFieldEmpty().click()
        this.leavePasswordFieldEmpty().click()
        this.clickLoginButton().click({force: true})
        this.checkIfEmailFieldIsRequired()
        this.checkIfPasswordFieldIsRequired()
    }

    enterInvalidCredentials(random){
        this.enterInvalidEmail().type(random)
        this.enterInvalidPassword().type(random)
        this.clickLoginButton().click()
        this.checkErrorInvalidCredentials()
    }

    authorizeUser(user){
        this.enterValidEmail().clear().type(user.email)
        this.enterValidPassword().clear().type(user.password)
        this.checkRememberMeCheckbox().check({force:true})
        this.clickLoginButton().click()
    }

}

export default new SignInPage();