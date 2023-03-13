export function loginViaUi(user) {
    cy.log('Open website login page');
    cy.visit('/#/login');

    cy.log('Close "Welcome" Banner')
    cy.get('[aria-label="Close Welcome Banner"]').click()

    cy.log('Authorize user');
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);

    cy.get('#rememberMe-input').check({ force: true });
    cy.get('#loginButton').click();
}

export function findItem() {
    cy.get('mat-card.mat-focus-indicator').then((body) => {
            if (body.find(`[alt="Orange Juice (1000ml)"]`).length > 0) {
                cy.get(body).find('[alt="Orange Juice (1000ml)"]')
                .parents('mat-card')
                .find('[aria-label="Add to Basket"]').click({ force: true });
                cy.get('[aria-label="Show the shopping cart"]').click()
            }
            else {
                cy.get('[aria-label="Next page"]').click({force: true});
                findItem();
            }
        })
}
