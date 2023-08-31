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

Cypress.Commands.add('compras', () => { 

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
 })