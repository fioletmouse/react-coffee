describe('main page spec', () => {
  it('load main page', () => {
    cy.visit('/')
  })

  it('have 4 links',  () => {
    cy.get("a").should('have.length', 4)
  })
})