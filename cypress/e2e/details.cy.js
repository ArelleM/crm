describe('User Detail Page Test', () => {
    beforeEach(() => {
      cy.visit('localhost:3000');
      cy.get('#loginEmail').type('test@test.com');
      cy.get('#loginPassword').type('password123');
      cy.get('#loginPage button').click();
    });
  
    it('Shows user detail information', () => {
      cy.get('button').contains('voir le détail').first().click();
  
  
      cy.get('#userDetails .email').should('be.visible');
      cy.get('#userDetails .firstName').should('be.visible');
      cy.get('#userDetails .lastName').should('be.visible');
      cy.get('#userDetails .avatar').should('be.visible');
    });
  });
  