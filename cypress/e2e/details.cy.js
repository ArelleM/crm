describe('User Detail Page Test', () => {
    beforeEach(() => {
      cy.visit('localhost:3000');
      cy.get('#loginEmail').type('test@test.com');
      cy.get('#loginPassword').type('password123');
      cy.get('#loginPage button').click();
    });
  
    it('Shows user detail information', () => {
      // Cliquez sur le bouton 'voir le détail' de l'utilisateur (adaptez-le à votre véritable structure HTML)
      cy.get('button').contains('voir le détail').first().click();
  
  
      // Vérifiez les informations de l'utilisateur (adaptez ces sélecteurs à vos vrais sélecteurs HTML)
      cy.get('#userDetails .email').should('be.visible');
      cy.get('#userDetails .firstName').should('be.visible');
      cy.get('#userDetails .lastName').should('be.visible');
      cy.get('#userDetails .avatar').should('be.visible');
    });
  });
  