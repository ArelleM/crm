describe('Login flow', () => {
    it('allows a registered user to login and see the users', () => {
      // Given: I am not connected but I am registered
      cy.visit('localhost:3000');  // Remplacez ceci par l'URL de votre application
  
      // When: I click on the button ‘login’ on the login page
      cy.get('a[href="#"]').contains('Connexion').click();
  
      // And: I fill the username and password
      cy.get('#loginEmail').type('eve.holt@reqres.in');
      cy.get('#loginPassword').type('pistol');
  
      // Then: I navigate to the homepage
      cy.get('button').contains('Connexion').click();
  
      // And: I am able to see the users
      cy.get('#homePage').should('be.visible');
      cy.get('#userList').should('be.visible');
    });
  });
  