/// <reference types="Cypress" />

describe("Variables usage",()=>{

    it("navigating to  speicific page",()=>{

        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").then(($items)=>{
            const products=cy.get("a[href*='product/category&path=']")
            
            products.each(($el,index)=>{
                cy.log(index)
                cy.log($el.text())
                if(index==10)
               cy.wrap($el).click({force:true});
            })
        })

    })
})