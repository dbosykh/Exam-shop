import BasePage from "./BasePage"

class SignUpPage extends BasePage {

    visit() {
        cy.log('Open website home page');
        cy.visit('/');
    }

    closeWelcomeBanner(){
        return cy.get('[aria-label="Close Welcome Banner"]')
    }

    clickOnAccountIcon(){
        return cy.get('#navbarAccount')
    }

    clickOnLoginIcon(){
        return cy.get('#navbarLoginButton')
    }

    openSignUpPage(){
        return cy.get('#newCustomerLink')
    }

    fillEmailField(){
        return cy.get('#emailControl')
    }

    fillPasswordField(){
        return cy.get('#passwordControl')
    }

    fillRepeatPasswordField(){
        return cy.get('#repeatPasswordControl')
    }


    openSelect(){
        return cy.get('[role="combobox"]')
    }

    selectAnOption(){
        return cy.get('#mat-option-14')
    }

    insertAnswer(){
        return cy.get('#securityAnswerControl')
    }

    pressButton(){
        return cy.get('#registerButton')
    }

    verifyRegistration(){
        return cy.get('.mat-simple-snackbar.ng-star-inserted').should('contain', 'Registration completed successfully. You can now log in.')
    }

    signUp(user){
        this.closeWelcomeBanner().click()
        this.clickOnAccountIcon().click()
        this.clickOnLoginIcon().click()
        this.openSignUpPage().click()
        this.fillEmailField().type(user.email);
        this.fillPasswordField().type(user.password);
        this.fillRepeatPasswordField().type(user.password);
        this.openSelect().click()
        this.selectAnOption().click()
        this.insertAnswer().type(user.body)
        this.pressButton().click()
        this.verifyRegistration()

    }

}

export default new SignUpPage();