
describe('main page spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('have 4 links',  () => {
    cy.get("a").should('have.length', 4)
    cy.get("a[href='/tools']").should("have.text", "tools")
    cy.get("a[href='/blends']").should("have.text", "blends")
    cy.get("a[href='/recipes']").should("have.text", "recipes")
    cy.get("a[href='/dict']").should("have.text", "dicts")
  })

  it('open tools page',  () => {
    cy.contains("tools").click()
    cy.url().should('include', '/tools')
  })

  it('open blends page',  () => {
    cy.contains("blends").click()
    cy.url().should('include', '/blends')
  })

  it('open recipes page',  () => {
    cy.contains("recipes").click()
    cy.url().should('include', '/recipes')
  })

  it('open dict page',  () => {
    cy.contains("dicts").click()
    cy.url().should('include', '/dict')
  })
})