describe('Logout flow', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');  // Remplacez ceci par l'URL de votre application
        cy.get('a[href="#"]').contains('Connexion').click();
        cy.get('#loginEmail').type('eve.holt@reqres.in');
        cy.get('#loginPassword').type('pistol');
        cy.get('button').contains('Connexion').click();
    });
    it('allows a connected user to logout and redirects to the login page', () => {
      // When: I click on the button ‘logout’ on the homepage
      cy.get('a[href="#"]').contains('Déconnexion').click();
  
      cy.get('#userList').should('not.exist');
    });
  });
  