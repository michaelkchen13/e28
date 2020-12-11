describe('Favorites Page', () => {
    it('visits the favorites page', () => {

        cy.login();

        cy.get('[data-test="Favorites-link"]').click();
        cy.contains('h2', 'Favorite Notes');
    })
})