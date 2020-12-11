describe('Subject Page', () => {

    let note = {
        name: 'Title Test',
        description: 'Description Test',
    }

    it('visit a subject page', () => {
        cy.login();

        cy.get('[data-test="Home-link"]').click();
        cy.get('a[href*="/subject/1"]').click();
        cy.contains('h2', 'General Notes');

    })

    it('add note text', () => {
        cy.get('[data-test=note-toggle-btn]').click();

        cy.get('[data-test=title-input]').clear();
        cy.get('[data-test=description-input]').clear();
        cy.get('[data-test="add-note-btn"]').click();
        cy.contains('The title field is required.');
        cy.contains('The description field is required.');

        cy.get('[data-test=title-input]').clear().type(note.name);
        cy.get('[data-test=description-input]').clear().type(note.description);
        cy.get('[data-test="add-note-btn"]').click();
    })

    it('edit note text', () => {
        cy.contains('h5', 'Title Test');
        cy.get('[data-test=edit-btn]').first().click();

        cy.get('[data-test=edit-title]').clear();
        cy.get('[data-test=edit-description]').clear();
        cy.get('[data-test="edit-save-btn"]').click();
        cy.contains('The title field is required.');
        cy.contains('The description field is required.');

        cy.get('[data-test=edit-btn]').first().click();

        cy.get('[data-test=edit-title]').clear().type('Title Test Edit');
        cy.get('[data-test=edit-description]').clear().type('Description Test Edit');
        cy.get('[data-test="edit-save-btn"]').click();

        cy.contains('Title Test Edit');
        cy.contains('Description Test Edit');

    })

    it('add/remove from favorites', () => {
        cy.get('[data-test="add-favorite"]').first().click();
        cy.get('[data-test=remove-favorite]').first().click();

        // cy.get('[data-test="Favorites-link"]').click();
        // cy.contains('Title Test Edit');
        // cy.contains('Description Test Edit');

        // cy.get('[data-test="Home-link"]').click();
        // cy.get('a[href*="/subject/1"]').click();
        // cy.get('[data-test=remove-favorite]').first().click();

        // cy.get('[data-test="Favorites-link"]').click();
        // cy.contains('Title Test Edit').should('not.exist');
        // cy.contains('Description Test Edit').should('not.exist');
    })

    it('delete note', () => {
        cy.get('[data-test=delete-note]').first().click();

        cy.contains('Title Test Edit').should('not.exist');
        cy.contains('Description Test Edit').should('not.exist');
    })

})