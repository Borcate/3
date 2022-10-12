/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

import checkout from '../support/page_objects/checkout.page'


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos//')
    });

    it('Deve selecionar produtos e validar compra', () => {
       // cy.pedidos_produtos('Aether Gym Pant', '36', 'Blue', 1)

       // cy.get('#primary-menu > .menu-item-629 > a').click()
       // cy.pedidos_produtos('Ajax Full-Zip Sweatshirt', 'S', 'Red', 1)

       // cy.get('#primary-menu > .menu-item-629 > a').click()
        //cy.pedidos_produtos('Atlas Fitness Tank', 'Blue','L', 1)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.pedidos_produtos('Augusta Pullover Jacket', 'M', 'Red', 1)
        
        //cy.get('.dropdown-toggle > .mini-cart-items').click()
        //cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        //botão ver carrinho
        cy.get('.woocommerce-message > .button').click()
        //botão concluir compra
        cy.get('.checkout-button').click()

        cy.get('.showlogin').click()
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha, {log: false})
        cy.get('.woocommerce-button').click()

        checkout.PreencherCheckout()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });

})
