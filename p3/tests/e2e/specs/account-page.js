describe('Account Page', () => {

    let user = {
        name: 'Test',
        email: 'test@test.com',
        password: 'testtest'
    }

    it('Test Login Validation', () => {
        cy.visit('/account');

        cy.contains('h2', 'Login');

        // test for incorrect credentials
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type('this-password-should-not-work');
        cy.get('[data-test=login-button]').click();
        cy.contains('These credentials do not match our records');

        // test for required fields
        cy.get('[data-test=email-input]').clear();
        cy.get('[data-test=password-input]').clear();
        cy.get('[data-test=login-button]').click();
        cy.get('[data-test=login-button]').click();
        cy.contains('The email field is required.');
        cy.contains('The password field is required.');

        // format validation tests
        cy.get('[data-test=email-input]').clear().type('test');
        cy.get('[data-test=password-input]').clear().type('test');
        cy.get('[data-test=login-button]').click();
        cy.get('[data-test=login-button]').click();
        cy.contains('The email format is invalid.');
        cy.contains('The password must be at least 8 characters.');
        cy.contains('The email must be a valid email address.');
    })

    it('Test Register Validation', () => {
        cy.get('[data-test=register-toggle-btn]').click();

        cy.contains('h2', 'Register');

        // test for required fields
        cy.get('[data-test=email-register-input]').clear();
        cy.get('[data-test=name-register-input]').clear()
        cy.get('[data-test=password-register-input]').clear();
        cy.get('[data-test=register-button]').click();
        cy.get('[data-test=register-button]').click();
        cy.contains('The name field is required.');
        cy.contains('The email field is required.');
        cy.contains('The password field is required.');

        // format validation tests
        cy.get('[data-test=email-register-input]').clear().type('test');
        cy.get('[data-test=password-register-input]').clear().type('test');
        cy.get('[data-test=register-button]').click();
        cy.get('[data-test=register-button]').click();
        cy.contains('The email format is invalid.');
        cy.contains('The password must be at least 8 characters.');
        cy.contains('The email must be a valid email address.');
    })

    it('Register a test user', () => {
        // register
        cy.get('[data-test=name-register-input]').clear().type(user.name);
        cy.get('[data-test=email-register-input]').clear().type(user.email);
        cy.get('[data-test=password-register-input]').clear().type(user.password);
        cy.get('[data-test=register-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        // logout
        cy.get('[data-test=logout-button]').click();

        // We know logout works if we see the login button again
        cy.get('[data-test="register-button"]').should('exist');
    })

    it('lets a user log in and log out', () => {
        // login
        cy.get('[data-test=login-toggle-btn]').click();
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);

        // logout
        cy.get('[data-test=logout-button]').click();

        // We know logout works if we see the login button again
        cy.get('[data-test="login-button"]').should('exist');
    })
})