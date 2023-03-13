import BasePage from "./BasePage";

class CheckoutPage extends BasePage{

    clickCheckoutButton(){
        return cy.get('#checkoutButton')
    }

    selectAnAddress(){
        return cy.get('[aria-label="Add a new address"]')
    }

    fillCountryField(){
        return cy.get('#mat-input-3')
    }

    fillNameField(){
        return cy.get('#mat-input-4')
    }

    fillNumberField(){
        return cy.get('#mat-input-5')
    }

    fillZipCodeField(){
        return cy.get('#mat-input-6')
    }

    fillAddressField(){
        return cy.get('#address')
    }

    fillCityField(){
        return cy.get('#mat-input-8')
    }

    fillStateField(){
        return cy.get('#mat-input-9')
    }

    pressSubmitButton(){
        return cy.get('#submitButton')
    }

    checkAddressButton(){
        return cy.get('.mat-radio-container').eq(0)
    }

    pressContinue(){
        return cy.get('[aria-label="Proceed to payment selection"]')
    }

    chooseDeliverySpeed(){
        return cy.get('.mat-radio-outer-circle').eq(2)
    }

    proceedToDeliveryMethodSelection(){
        return cy.get('[aria-label="Proceed to delivery method selection"]')
    }

    openNewCardAccordion(){
        return cy.get('#mat-expansion-panel-header-0')
    }

    fillNameForCardField(){
        return cy.get('#mat-input-10 ')
    }

    fillCreditCardField(){
        return cy.get('#mat-input-11')
    }

    fillCreditCardField(){
        return cy.get('#mat-input-11')
    }

    selectExparationMonth(){
        return cy.get('#mat-input-12').select('1').should('have.value', '1') 
    }

    selectExparationYear(){
        return cy.get('#mat-input-13').select('2080').should('have.value', '2080') 
    }

    getSubmitButton(){
        return cy.get('#submitButton')
    }

    checkCreditCardRatiobutton(){
        return cy.get('.mat-radio-outer-circle').eq(0)
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to review"]')
    }

    completePurchase(){
        return cy.get('#checkoutButton')
    }

    verifyComplitionOfOrder(){
        return cy.get('.confirmation').eq(0).should('contain', 'Thank you for your purchase!')
    }

    checkout(user){
        this.clickCheckoutButton().click()
        this.selectAnAddress().click()
        this.fillCountryField().type(user.country)
        this.fillNameField().type(user.name)
        this.fillNumberField().type(user.number)
        this.fillZipCodeField().type(user.zipCode)
        this.fillAddressField().type(user.address)
        this.fillCityField().type(user.city)
        this.fillStateField().type(user.state)
        this.pressSubmitButton().click()
        this.checkAddressButton().click({force:true})
        this.pressContinue().click()
        this.chooseDeliverySpeed().click({force: true})
        this.proceedToDeliveryMethodSelection().click()
        this.openNewCardAccordion().click()
        this.fillNameForCardField().type(user.name)
        this.fillCreditCardField().type(user.creditCard)
        this.selectExparationMonth()
        this.selectExparationYear()
        this.getSubmitButton().click()
        this.checkCreditCardRatiobutton().click({force:true})
        this.getContinueButton().click()
        this.completePurchase().click()
        this.verifyComplitionOfOrder()
        
    }

}

export default new CheckoutPage();