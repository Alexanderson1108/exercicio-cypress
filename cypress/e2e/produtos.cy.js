/// <reference types="cypress" />

context('compra de produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('selecionar produto', () => {
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(3)

        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
        cy.get('.woocommerce-message').should('contain' , 3)
    });

    
});