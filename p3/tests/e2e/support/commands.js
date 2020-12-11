let user = {
    name: 'Michael Chen',
    email: 'michaelkchen13@gmail.com',
    password: '12345678'
}

Cypress.Commands.add("login", () => {
    cy.visit('/account');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);
 })
