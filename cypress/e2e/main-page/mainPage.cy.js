
describe('main page spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('have 4 links',  () => {
    cy.get("a").should('have.length', 4)
    cy.get("a[href='/tools']").should("exist").should("have.text", "tools")
    cy.get("a[href='/blends']").should("exist").should("have.text", "blends")
    cy.get("a[href='/recipes']").should("exist").should("have.text", "recipes")
    cy.get("a[href='/other']").should("exist").should("have.text", "other")
  })

  it('open tools page',  () => {
    cy.contains("tools").click()
    cy.url().should('include', '/tools')
  })
})