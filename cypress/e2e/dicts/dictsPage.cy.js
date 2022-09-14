describe('dictionaries page spec', () => {
    beforeEach(() => {
        cy.visit('/dict');
    })

    it('should show 2 dicts', () => {
        cy.contains('h4', 'Processing');
        cy.contains('h4', 'Brewing');
    })

    describe('dictionary add value spec', () => {
        beforeEach(() => {
            cy.get('[data-test="header_Brewing"] > button').as("action_btn");
        })

        it('should add a new value', () => {
            cy.get('@action_btn').click();
            cy.get('input').type("brewing_type");
            cy.get('[data-test="button_submit"]').as("submit_btn").click();
            // hide add functionality
            cy.get('input').should('not.exist');
            cy.get('@submit_btn').should('not.exist');
            // new value appears
            cy.contains("brewing_type");
        })
        
        it('should cancel add functionality', () => {
            cy.get('@action_btn').as("action_btn").click();
            cy.get('input').type("brewing_cancel");
            //cancell button
            cy.get('@action_btn').click();
    
            // hide add functionality
            cy.get('input').should('not.exist');
            cy.get('[data-test="button_submit"]').should('not.exist');
            // no data has been added
            cy.contains("No data found");
            //click again - no data in input
            cy.get('@action_btn').click();
            cy.get('input').should("not.contain.value");
        })

        it('should not add an empty value', () => {
            cy.get('@action_btn').click();
            cy.get('input').type("    ");
            cy.get('[data-test="button_submit"]').as("submit_btn").click();
            // there is no value
            cy.contains("No data found");
        })
    });

    describe('dictionary edit and delete value spec', () => {
        beforeEach(() => {
            // add value
            cy.get('[data-test="header_Brewing"] button').as("action_btn");
            cy.get('@action_btn').click();
            cy.get('input').type("brewing_type");
            cy.get('[data-test="button_submit"]').click();
            // create var
            cy.get('[data-test="header_Brewing"]').parent().next("div").as("record_row")
            cy.get("@record_row").within(() => {
                cy.get('[data-test="edit_btn"]').as('edit_btn')
            })
        })

        it('should edit an existing value', () => {
            cy.get('@edit_btn').click();
            cy.get('input').should('have.value', "brewing_type");
            cy.get('input').clear().type("new_type");
            cy.get('[data-test="button_submit"]').click();

            // value is changed
            cy.contains("new_type");
            cy.contains("brewing_type").should('not.exist');

            // no edit fields
            cy.get('input').should('not.exist');
            cy.get('[data-test="button_submit"]').should('not.exist');
        })

        it('should cancel the editing of existing value', () => {
            cy.get('@edit_btn').click();
            cy.get('input').should('have.value', "brewing_type");
            cy.get('input').clear().type("new_type");
            cy.get('@edit_btn').click(); // cancel

            // value is changes
            cy.contains("new_type").should('not.exist');
            cy.contains("brewing_type");
            // no edit fields
            cy.get('input').should('not.exist');
            cy.get('[data-test="button_submit"]').should('not.exist');

        })

        it('should not update existing value to empty', () => {
            cy.get('@edit_btn').click();
            cy.get('input').should('have.value', "brewing_type");
            cy.get('input').clear().type("   ");
            cy.get('[data-test="button_submit"]').click();

            // value is not changed
            cy.contains("brewing_type");
        })

        it('should delete value', () => {
            cy.get("@record_row").within(() => {
                cy.get('[data-test="button_delete_Brewing"]').click()
            });
            cy.contains("No data found")
        })
    });
});
