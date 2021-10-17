/// <reference types="Cypress"/>

describe("iterate over elements", () => {
    it.only("log information of all hari care products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list1)=>{

            cy.log("Index :"+ index+ ":"+ $el.text())

            if($el.text().includes('Eau Parfumee au The Vert Shampoo'))
            cy.wrap($el).click()
            

        })
    }),
        it("add spcific product to basket", () => {

            cy.visit("https://www.pomelofashion.com/th/en/");
            cy.get('link').each(($el,index,$list)=>{
                const link=$el.prop('href')
                cy.log(link)
                    
                    

            })
        })
})