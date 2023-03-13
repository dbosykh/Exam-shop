import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'
import {loginViaUi}  from '../support/helper';
import CheckoutPage from '../support/pages/CheckoutPage'

user.country = faker.address.country();
user.name = faker.name.fullName();
user.number = faker.phone.number('#########');
user.zipCode = faker.address.zipCode('####');
user.city = faker.address.city();
user.address = faker.address.secondaryAddress();
user.state = faker.address.state();
user.creditCard = faker.finance.creditCardNumber('63[7-9]############L');

it('Order', () => {

loginViaUi(user);

cy.log('Open page with products')
cy.visit('/#/search')

cy.log('Click on "Add to Basket"')
cy.get('[aria-label="Add to Basket"]').eq(9).click();

cy.log('Verify adding product to cart')
cy.get('.mat-snack-bar-container').should('contain', 'Placed Lemon Juice (500ml) into basket.')

cy.log('Go to cart')
cy.get('[aria-label="Show the shopping cart"]').click()

CheckoutPage.checkout(user)

})