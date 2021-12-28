describe('User flow', () => {
  it('navigate to movie page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.c-movies__list li').first().click();

    cy.url().should('include', '/movies');
    cy.get('h1').should('have.class', 'title');
  });

  it('navigate to movie page and go back to home page using back icon', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.c-movies__list li').first().click();
    cy.get('a.p-movie__back').click();

    cy.url().should('include', '/');
    cy.get('ul').should('have.class', 'c-movies__list');
  });

  it('navigate to movie page and rate a movie', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.c-movies__list li').first().click();
    cy.get('.p-movie__rating').click();
    cy.get('h2').contains('Donner une note au film');
    cy.get('.c-rating .message.-valid').should('not.exist');
    cy.get('.c-rating__item').eq(6).click();
    cy.get('.c-rating .button').click();
    cy.get('.c-rating .message.-valid').should('exist').contains('7');
  });
});
