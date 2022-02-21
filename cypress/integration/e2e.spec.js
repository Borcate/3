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
        cy.pedidos_produtos1('Aether Gym Pant', '36', 'Blue', 1)
        cy.pedidos_produtos2('Ajax Full-Zip Sweatshirt', 'S', 'Red', 1)
        cy.pedidos_produtos3('Atlas Fitness Tank', 'L', 1)
        cy.pedidos_produtos4('Augusta Pullover Jacket', 'M', 'Red', 1)

        cy.get('.showlogin').click()
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha, {log: false})
        cy.get('.woocommerce-button').click()

        checkout.PreencherCheckout()
    
    });

})