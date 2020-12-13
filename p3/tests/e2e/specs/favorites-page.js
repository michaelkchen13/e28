describe('Favorites Page', () => {
    it('visits the favorites page while logged out', () => {

        // test for access denied
        cy.visit('/favorites');
        cy.contains('h1', 'Access Denied');
    })

    it('visits the favorites page while logged in', () => {
        // test while logged in
        cy.login();

        cy.get('[data-test="Favorites-link"]').click();
        cy.contains('h2', 'Favorite Notes');
    })
})