describe('User Detail Page Test', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');  // Remplacez ceci par l'URL de votre application
        cy.get('a[href="#"]').contains('Connexion').click();
        cy.get('#loginEmail').type('eve.holt@reqres.in');
        cy.get('#loginPassword').type('pistol');
        cy.get('button').contains('Connexion').click();
    });
  
    it('Shows user detail information', () => {
      cy.get('button').contains('voir le détail').first().click();
  
  
      cy.get('#userDetails .email').should('be.visible');
      cy.get('#userDetails .firstName').should('be.visible');
      cy.get('#userDetails .lastName').should('be.visible');
      cy.get('#userDetails .avatar').should('be.visible');
    });
  });
  