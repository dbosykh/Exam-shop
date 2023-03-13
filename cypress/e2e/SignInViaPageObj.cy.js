import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'
import SignInPage from '../support/pages/SignInPage';

const random = faker.random.word();

it('Authorization', () => {

  SignInPage.visit();
  SignInPage.closePopups();
  SignInPage.checkCookies();
  SignInPage.leaveRequiredFieldsEmpty();
  SignInPage.enterInvalidCredentials(random);
  SignInPage.authorizeUser(user);

})