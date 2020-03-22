describe('My Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Hi.')
  });

  it('navigates to /blog', () => {
    cy.get('nav a').contains('Blog').click();
    cy.url().should('include', '/blog');
  });

  it('navigates to /portfolio', () => {
    cy.get('nav a').contains('Portfolio').click();
    cy.url().should('include', '/portfolio');
  });

  it('navigates to /about', () => {
    cy.get('nav a').contains('About').click();
    cy.url().should('include', '/about');
  });
});
