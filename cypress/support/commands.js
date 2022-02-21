// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('pedidos_produtos1', (prod1, tamanho1, cor1, quant1) => {

    cy.get('[class="product-block grid"]').contains(prod1).click()
    cy.get('.button-variable-item-' + tamanho1).click()
    cy.get('.button-variable-item-' + cor1).click()
    cy.get('.input-text').clear().type(quant1)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')
});

Cypress.Commands.add('pedidos_produtos2', (prod2, tamanho2, cor2, quant2) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()

    cy.get('[class="product-block grid"]').contains(prod2).click()
    cy.get('.button-variable-item-' + tamanho2).click()
    cy.get('.button-variable-item-' + cor2).click()
    cy.get('.input-text').clear().type(quant2)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')
});

Cypress.Commands.add('pedidos_produtos3', (prod3, tamanho3, quant3) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()

    cy.get('[class="product-block grid"]').contains(prod3).click()
    cy.get('.button-variable-item-' + tamanho3).click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type(quant3)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')
});

Cypress.Commands.add('pedidos_produtos4', (prod4, tamanho4, cor4, quant4) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()

    cy.get('[class="product-block grid"]').contains(prod4).click()
    cy.get('.button-variable-item-' + tamanho4).click()
    cy.get('.button-variable-item-' + cor4).click()
    cy.get('.input-text').clear().type(quant4)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')

    cy.get('.dropdown-toggle > .mini-cart-items').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
});



