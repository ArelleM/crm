describe('Registration flow', () => {
  it('allows a user to register and see the users', () => {
    // Given: I am not connected and I am not register
    cy.visit('localhost:3000')

    // When: I click on the button ‘register’ on the login page
    cy.get('a[href="#"]').contains('Inscription').click();

    // Then the form appear with the username, email and password fields
    cy.get('#registerPage').should('be.visible');
    cy.get('#registerEmail').should('be.visible');
    cy.get('#registerPassword').should('be.visible');

    // When: I fill the form with a username, an email and a password
    cy.get('#registerEmail').type('eve.holt@reqres.in');
    cy.get('#registerPassword').type('pistol');

    // And I click on register
    cy.get('button').contains('Inscription').click();

    // Then: I navigate to the homepage
    cy.get('#homePage').should('be.visible');

    // And I am able to see the users
    cy.get('#userList').should('be.visible');
  });
});
