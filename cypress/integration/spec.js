describe('My Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Hi.')
  });

  xit('navigates to /blog', () => {
    cy.get('nav a').contains('Blog').click();
    cy.url().should('include', '/blog');
  });

  it('navigates to /projects', () => {
    cy.get('nav a').contains('Projects').click();
    cy.url().should('include', '/projects');
  });

  it('navigates to /about', () => {
    cy.get('nav a').contains('About').click();
    cy.url().should('include', '/about');
  });
});
