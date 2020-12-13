describe('Subject Page', () => {

    let note = {
        name: 'Title Test',
        description: 'Description Test',
    }

    it('visit a subject page logged out', () => {
        cy.visit('/');

        cy.get('[data-test="Home-link"]').click();
        cy.get('a[href*="/subject/1"]').click();
        cy.contains('h2', 'General Notes');

        // confirm user only content isn't on page
        cy.contains('h3', 'Add New Note').should('not.exist');
        cy.contains('Edit Note').should('not.exist');
        cy.contains('Add to favorites').should('not.exist');
        cy.contains('Delete').should('not.exist');
    })

    it('visit a subject page logged in', () => {
        cy.login();

        cy.get('[data-test="Home-link"]').click();
        cy.get('a[href*="/subject/1"]').click();
        cy.contains('h2', 'General Notes');

        // confirm user only content is on page
        cy.contains('h3', 'Add New Note');
        cy.contains('Edit Note');
        cy.contains('Add to favorites');
        cy.contains('Delete');
    })

    it('test note validation', () => {
        //test note validation
        cy.get('[data-test=note-toggle-btn]').click();

        cy.get('[data-test=title-input]').clear();
        cy.get('[data-test=description-input]');
        cy.get('[data-test="add-note-btn"]').click();
        cy.contains('The title field is required.');
        cy.contains('The description field is required.');
    })

    it('add note', () => {
        cy.get('[data-test=title-input]').clear().type(note.name);
        cy.get('[data-test=description-input]').clear().type(note.description);
        cy.get('[data-test="add-note-btn"]').click();
        cy.contains('Note Added!');

        cy.contains('h5', 'Title Test');
    })

    it('edit note text', () => {
        cy.get('[data-test=edit-btn]').first().click();

        // text edit note validation
        cy.get('[data-test=edit-title]').clear();
        cy.get('[data-test=edit-description]').clear();
        cy.get('[data-test="edit-save-btn"]').click();
        cy.contains('The title field is required.');
        cy.contains('The description field is required.');

        // edit note
        cy.get('[data-test=edit-title]').clear().type('Title Test Edit');
        cy.get('[data-test=edit-description]').clear().type('Description Test Edit');
        cy.get('[data-test="edit-save-btn"]').click();

        cy.contains('Title Test Edit');
        cy.contains('Description Test Edit');

    })

    it('add/remove from favorites', () => {
        cy.login();
        cy.get('[data-test="Home-link"]').click();
        cy.get('a[href*="/subject/1"]').click();

        // add favorite and test
        cy.get('[data-test="add-favorite"]').first().click();


        cy.get('[data-test="Favorites-link"]').click();
        cy.contains('Favorite Notes');
        cy.contains('Title Test Edit');
        cy.contains('Description Test Edit');

        // remove favorite and test
        cy.get('[data-test="Home-link"]').click();
        cy.get('a[href*="/subject/1"]').click();
        cy.get('[data-test=remove-favorite]').first().click();

        cy.get('[data-test="Favorites-link"]').click();
        cy.contains('Title Test Edit').should('not.exist');
        cy.contains('Description Test Edit').should('not.exist');
    })

    it('delete note', () => {
        cy.get('[data-test="Home-link"]').click();
        cy.get('a[href*="/subject/1"]').click();

        cy.get('[data-test=delete-note]').first().click();

        cy.contains('Title Test Edit').should('not.exist');
        cy.contains('Description Test Edit').should('not.exist');
    })

})