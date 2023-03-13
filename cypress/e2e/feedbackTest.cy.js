import { faker } from '@faker-js/faker';

const comment = faker.random.words(5);

it('Feedback test', () => {
    
    cy.log('Visit feedback page')
    cy.intercept('GET', '/rest/captcha/').as("getCaptcha")
    cy.visit('/#/contact')
    
    cy.log('Close "Welcome" Banner')
    cy.get('[aria-label="Close Welcome Banner"]').click()
    
    cy.log('Enter comment')
    cy.get('#comment').type(comment)

    const currentValue = 1;
    const targetValue = 3;
    const increment = 1;
    const steps = (targetValue - currentValue) / increment;
    const decrement = 2;
    const arrowsLeft = '{leftarrow}'.repeat(decrement);
    const arrowsRight = '{rightarrow}'.repeat(steps);

    cy.log('Specify rating')
    cy.get('#rating')
        .should('have.attr', 'aria-valuenow', 0)
        .type(arrowsLeft)
        .should('have.attr', 'aria-valuenow', 1)
        .type(arrowsRight)

    cy.get('#rating')
        .should('have.attr', 'aria-valuenow', 3)

    cy.wait('@getCaptcha').then((interception) => {
        const response = interception.response
        cy.get('#captchaControl').type(response.body.answer)
    })

    cy.log('Click Submit Button')
    cy.get('#submitButton').click()
})
