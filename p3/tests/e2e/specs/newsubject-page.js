describe('New Subject Page', () => {

    let subject = {
        name: 'Subject Test',
        description: 'Description Test',
    }

    it('visits the subject page while logged out', () => {
        // test for access denied
        cy.visit('/new');
        cy.contains('h1', 'Access Denied');
    })

    it('test validation', () => {
        cy.login();

        // test for correct page
        cy.get('[data-test="Add a Subject-link"]').click();
        cy.contains('h2', 'Add New Subject');

        // test for empty fields
        cy.get('[data-test=subject-name-input]').clear();
        cy.get('[data-test=subject-description-input]');
        cy.get('[data-test="subject-add-btn"]').click();
        cy.contains('The name field is required.');
        cy.contains('The description field is required.');

        // format validation tests
        cy.get('[data-test=subject-name-input]').type('T');
        cy.get('[data-test=subject-description-input]').type('T');
        cy.get('[data-test="subject-add-btn"]').click();
        cy.contains('The name field must be between 3 and 100 characters.');
        cy.contains('The description must be at least 3 characters.');
    })

    it('add new subject', () => {
        cy.get('[data-test=subject-name-input]').clear().type(subject.name);
        cy.get('[data-test=subject-description-input]').clear().type(subject.description);
        cy.get('[data-test="subject-add-btn"]').click();
        cy.contains('New Subject Added!');

        cy.get('[data-test="Home-link"]').click();
        cy.contains(subject.name);
    })

})