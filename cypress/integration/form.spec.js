describe('Pizza Order Form', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    });

    // Sanity checks
    it('sanity checks', () => {
        expect(5).to.equal(5);
        expect(1 + 2).to.equal(3);
    });

    // Helper variables
    const nameInput = () => cy.get('input[name="name"]');
    const submitBtn = () => cy.get('button#order-button');

    it('tests that you can add text to the box', () => {
        nameInput().should('exist');
        nameInput()
            .type('Bobby')
            .should('have.value', 'Bobby');
    })

    it('tests that you can select multiple toppings', () => {
        const pepperoni = () => cy.get('input[name="pepperoni"]');
        const sausage = () => cy.get('input[name="sausage"]');
        const olives = () => cy.get('input[name="olives"]');
        const peppers = () => cy.get('input[name="peppers"]');

        pepperoni().should('not.be.checked');
        pepperoni().click().should('be.checked');

        sausage().should('not.be.checked');
        sausage().click().should('be.checked');

        olives().should('not.be.checked');
        olives().click().should('be.checked');

        peppers().should('not.be.checked');
        peppers().click().should('be.checked');
    });

    it('tests that you can submit the form', () => {
        submitBtn()
            .should('be.enabled')
            .click()
    })
})