describe('New Subject Page', () => {
    
    let subject = {
        name: 'Subject Test',
        description: 'Description Test',
    }
    
    it('add new subject and test validation', () => {

        cy.login();

        cy.get('[data-test="Add a Subject-link"]').click();
        cy.contains('h2', 'Add New Subject');

        cy.get('[data-test=subject-name-input]').clear();
        cy.get('[data-test=subject-description-input]').clear();
        cy.get('[data-test="subject-add-btn"]').click();
        cy.contains('The name field is required.');
        cy.contains('The description field is required.');

        cy.get('[data-test=subject-name-input]').clear().type(subject.name);
        cy.get('[data-test=subject-description-input]').clear().type(subject.description);
        cy.get('[data-test="subject-add-btn"]').click();
        cy.contains('New Subject Added!');

        cy.get('[data-test="Home-link"]').click();
        cy.contains('Subject Test');

    })

})