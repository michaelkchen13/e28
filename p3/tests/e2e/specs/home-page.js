describe('Home Page', () => {
    it('visits the homepage', () => {

        cy.visit('/');
        cy.contains('a', "Mike's Notes");
        cy.contains('a', "General Notes");

        // Confirm we see at least 2 subjects
        cy.get('[data-test="subject"]').its('length').should('be.gte', 2);
    })
    
    it('clicks on subject General Notes', () => {

        cy.get('a[href*="/subject/1"]').click();
        cy.contains('h2', 'General Notes');

    })
})