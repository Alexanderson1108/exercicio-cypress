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
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' ,1)

        //2º produto

        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-XS').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , 2)

        //3º produto

        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , 3)

        //4º produto

        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]').contains('Balboa Persistence Tee').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , 4)

        //compra

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

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
        cy.get('#place_order').click()

        
        










        

        


    });

    //


})