/// <reference types="cypress"/>

describe("Alias and Invoke",()=>{

    it("validate product thumbnail product",()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').its("length").should('be.gt',15)
        cy.get("@productThumbnail").should("have.length",16)
        cy.get("@productThumbnail").find('.productcart').invoke('attr','title').should('include','Add to Carts')
    })
})