
describe('blends page spec', () => {
    beforeEach(() => {
        cy.visit('/blends');
    })

    it('should show 2 dicts', () => {
        cy.get('table');
        cy.get('table > thead');
    })

    describe('blends add value spec', () => {
        beforeEach(() => {
            cy.get('[data-test="add_btn"]').as("add_btn");
        })

        function addRequiredValues() {
           cy.get('input[name="name"]').type('test-name');
           cy.get('input[name="country"]').type('test-country');
           cy.get('input[name="region"]').type('test-region');
           cy.get('input[name="type"]').type('test-type');
           cy.get('input[name="brew"]').type('test-brew');
        }

        it('should open/close a modal', () => {
            cy.get('@add_btn').click();
            cy.get('div.modal').should('have.class', 'show');
            cy.get('div.modal-header > button.close').click();
            cy.get('div.modal').should('not.exist');
        })

        it('should add a new value', () => {
            cy.get('@add_btn').click();
            addRequiredValues();
            cy.get('[data-test="button_submit"]').click();
            // no modal window
            cy.get('div.modal').should('not.exist');
            // table contains new row
            cy.get("tbody > tr").last().as("new_rec");
            cy.get('@new_rec').within(() => {
                cy.get('td').should('contain.text', 'test-country').next()
                .should('contain.text', 'test-name').next()
                .should('contain.text', '').next()
                .should('contain.text', 'Acid: -% Sweet: -%\n Intensity: -%')
            })
        })

        it('should add a new value with processing', () => {
            cy.get('@add_btn').click();
            addRequiredValues();
            cy.get('input[id="сухая"]').click();
            cy.get('[data-test="button_submit"]').click();
            // // table contains new row
            cy.get("tbody > tr").last().as("new_rec");
            cy.get('@new_rec').within(() => {
                cy.get('td').should('contain.text', 'test-country').next()
                .should('contain.text', 'test-name').next()
                .should('contain.html', 'svg').next()
                .should('contain.text', 'Acid: -% Sweet: -%\n Intensity: -%')
            })
        })

        it('should cancel a new value adding', () => {
            cy.get('@add_btn').click();
            addRequiredValues();
            cy.get('div.modal-header > button.close').click();
            // no modal window
            cy.get('div.modal').should('not.exist');
            // table does not contain a new value
            cy.get("tbody").should('not.contain.text', 'test-name')
            cy.get("tbody").should('not.contain.text', 'test-country')
        })

        it('should show validation errors for required fields', () => {
            cy.get('@add_btn').click();
            cy.get('[data-test="button_submit"]').click();
            // modal window is still here
            cy.get('div.modal');
            // errors:
            cy.get("p").contains('Name is required');
            cy.get("p").contains('Country is required');
            cy.get("p").contains('Region is required');
            cy.get("p").contains('Type is required');
            cy.get("p").contains('Brew is required');
        })

        it('should show min validation errors', () => {
            cy.get('@add_btn').click();
            addRequiredValues();
            // taste block
            cy.get('input[name="taste.acid"]').type(0);
            cy.get('input[name="taste.sweet"]').type(0);
            cy.get('input[name="taste.intensity"]').type(0);

            // altitude
            cy.get('input[name="minAltitude"]').type(-1);
            cy.get('input[name="maxAltitude"]').type(-1);

            cy.get('[data-test="button_submit"]').click();
            // modal window is still here
            cy.get('div.modal');
            // table does not contain a new value
            cy.get("p").contains('Max altitude is less than 0');
            cy.get("p").contains('Min altitude is less than 0');
            cy.get("p").contains('Intensity value should be more then 0');
            cy.get("p").contains('Sweet value should be more then 0');
            cy.get("p").contains('Acid value should be more then 0');
        })

        it('should show max validation errors', () => {
            cy.get('@add_btn').click();
            addRequiredValues();
            // taste block
            cy.get('input[name="taste.acid"]').type(110);
            cy.get('input[name="taste.sweet"]').type(110);
            cy.get('input[name="taste.intensity"]').type(110);

            // altitude
            cy.get('input[name="minAltitude"]').type(10000);
            cy.get('input[name="maxAltitude"]').type(10000);

            cy.get('[data-test="button_submit"]').click();
            // modal window is still here
            cy.get('div.modal');
            // table does not contain a new value
            cy.get("p").contains('Max altitude is greater than 5000');
            cy.get("p").contains('Min altitude is greater than 5000');
            cy.get("p").contains('Intensity value should be equal or less than 100');
            cy.get("p").contains('Sweet value should be equal or less than 100');
            cy.get("p").contains('Acid value should be equal or less than 100');
        })
    });

    describe.skip('dictionary edit and delete value spec', () => {
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
