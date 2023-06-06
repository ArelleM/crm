describe('Logout flow', () => {
    it('allows a connected user to logout and redirects to the login page', () => {
      // Given: I am connected 
      cy.visit('localhost:3000');  // Remplacez ceci par l'URL de votre application
  
      // When: I click on the button ‘login’ on the login page
      cy.get('a[href="#"]').contains('Connexion').click();
  
      // And: I fill the username and password
      cy.get('#loginEmail').type('eve.holt@reqres.in');
      cy.get('#loginPassword').type('pistol');
  
      // Then: I navigate to the homepage
      cy.get('button').contains('Connexion').click();
  
      // When: I click on the button ‘logout’ on the homepage
      cy.get('a[href="#"]').contains('Déconnexion').click();
  
      cy.get('#userList').should('not.exist');
    });
  });
  