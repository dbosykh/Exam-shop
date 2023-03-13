import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'
import { loginViaUi, findItem } from '../support/helper';
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

    findItem()

    CheckoutPage.checkout(user)

})