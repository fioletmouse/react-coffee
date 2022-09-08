describe('recipes list page spec', () => {
    beforeEach(() => {
        cy.visit('/recipes');
        cy.contains('button','Doppio').as('doppio');
    })

    it('should show 11 recipes', () => {
        cy.get('.block').should('have.length', 11)
    })

    it('should show the article', () => {
        cy.get('@doppio').click();
        cy.get('h3').should('have.text', 'Doppio');
        cy.get('img').should('have.attr', 'src', '../static/doppio.png',);
        cy.contains('p', 'On some menus');
    })

    it('should change the article', () => {
        cy.get('@doppio').click();
        cy.get('h3').should('have.text', 'Doppio');
        cy.contains('button','Latte').click();
        cy.get('h3').should('have.text', 'Latte');
    })

    it('should close article on click', () => {
        cy.get('@doppio').click();
        cy.contains('button', 'X').click();
        cy.get('h3').should('not.exist');
        cy.get('.block').should('have.length', 11)
    })
});