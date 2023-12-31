/// <reference types="cypress" />
const { faker, fakerPT_BR } = require('@faker-js/faker');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/')
        cy.get(':nth-child(3) > .page-numbers').click({ force: true })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProdutos('Cassius Sparring Tank', 'S', 'Blue')
        cy.pagina3Produtos()
        cy.addProdutos('Cobalt CoolTech™ Fitness Short', '33', 'Red')
        cy.pagina3Produtos()
        cy.addProdutos('Circe Hooded Ice Fleece', 'M', 'Green')
        cy.pagina3Produtos()
        cy.addProdutos('Chaz Kangeroo Hoodie', 'M', 'Gray')

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)

        //compra

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#order_review_heading').should('contain', 'Your order')

        let nomefaker = faker.name.firstName()
        let sobrenomefaker = faker.name.lastName()
        let enderecofaker = faker.address.streetAddress(false)
        let companiafaker = faker.company.bs()
        let cidadefaker = faker.address.city()
        let cepfaker = fakerPT_BR.address.zipCode()
        let telfaker = faker.phone.number('+55 ## ### ## ##')
        let emailfaker = faker.internet.email()
        let senhafaker = faker.internet.password()

        cy.get('#billing_first_name').type(nomefaker)
        cy.get('#billing_last_name').type(sobrenomefaker)
        cy.get('#billing_address_1').type(enderecofaker)
        cy.get('#billing_company').type(companiafaker)
        cy.get('#billing_address_2').type('casa')
        cy.get('#billing_city').type(cidadefaker)
        cy.get('#billing_postcode').type(cepfaker)
        cy.get('#billing_phone').type(telfaker)
        cy.get('#billing_email').type(emailfaker)
        cy.get('#createaccount').click()
        cy.get('#account_password').type(senhafaker)

        //finalizar compra

        cy.get('#terms').click()
        cy.get('#payment_method_cod').click()
        cy.get('#place_order').click({ force: true })
        cy.get('.page-title').should('contain', 'pedido recebido')

        //tentei com o force mas a pagina demora a carregar mesmo assim, nao deixando eu finalizar e dando erro



    });

    //


})