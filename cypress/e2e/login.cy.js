/// <reference types="cypress" />

context('deve efetuar login corretamente', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    it('realizar login completo', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain' , 'aluno_ebac20')

        
    });

    it('realizar login, porem ser ser dono da conta', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > a').click()
        cy.get('.woocommerce-privacy-policy-text > p').should('contain' , 'Seus dados pessoais serão usados para apoiar sua experiênci')

    
    });

    it('realizar login com email incorreto', () => {
        cy.get('#username').type('aluno_eba@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')

        });

        it.only('realizar login com senha incorreto', () => {
            cy.get('#username').type('aluno_ebac@teste.com')
            cy.get('#password').type('teste@teste.om')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
    
            });

    });
