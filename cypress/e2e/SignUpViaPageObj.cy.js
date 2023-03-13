import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'
import SignUpPage from '../support/pages/SignUpPage'

user.email = faker.internet.email();
user.password = faker.internet.password() + "1!" 
user.body = faker.random.word();

it('Sign Up', () => {
   
    SignUpPage.visit();
    SignUpPage.signUp(user);
 
 })
 