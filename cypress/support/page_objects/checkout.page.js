class checkout {

    PreencherCheckout() {
        cy.get('#billing_first_name').clear().type('Carla')
        cy.get('#billing_last_name').clear().type('Silva')
        cy.get('#billing_company').clear().type('Empresa2')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('Rua Flores')
        cy.get('#billing_address_2').clear().type('01')
        cy.get('#billing_city').clear().type('Curitiba')
        cy.get('#select2-billing_state-container').click().type('Paraná{enter}')
        cy.get('#billing_postcode').clear().type('83420-000')
        cy.get('#billing_phone').clear().type('00 9999-9999')
        cy.get('#order_comments').clear().type('Entregar na casa 02, portão azul')

        cy.get('#terms').click()
        cy.get('#place_order').click()
    }
    
    }
    
    export default new checkout()