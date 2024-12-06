describe('Swiggy Tests', () => {
    it('test', () => {
      cy.visit('https://www.swiggy.com/').wait(5000);
      cy.get(':nth-child(4) > .sc-jxOSlx > .sc-lcIPJg > :nth-child(1) > :nth-child(1) > :nth-child(1) > .sc-uVWWZ > .sc-hknOHE > .sc-bXCLTC').click().wait(5000)
      cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > .sc-eTqNBC > .sc-fsvrbR > .sc-cWSHoV > .sc-eBMEME > .sc-dtInlm > .sc-bXCLTC').click()
      cy.get(':nth-child(1) > .Card_container__20AEq > .Card_meta__1XgjI > .Card_metaFooter__3rweh > .Card_addButton__15wE5 > [style="position: relative;"] > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > .sc-ehixzo').click()
      cy.get(':nth-child(1) > .sc-bVHCgj > :nth-child(1) > :nth-child(1) > .sc-jrrFIm').click()
      cy.get('[data-cy="customize-footer-add-button"]').click()
      cy.get('.styles_viewCart__32FxP > span').click()
      cy.get('.WO7LQ').click()

    })
   
    describe('Swiggy Tests', () => {
      it('test', () => {
        cy.visit('https://www.swiggy.com/').wait(5000);
        cy.get(':nth-child(4) > .sc-jxOSlx > .sc-lcIPJg > :nth-child(1) > :nth-child(1) > :nth-child(1) > .sc-uVWWZ > .sc-hknOHE > .sc-bXCLTC').click()
        cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > .sc-eTqNBC > .sc-fsvrbR > .sc-cWSHoV > .sc-eBMEME > .sc-dtInlm > .sc-bXCLTC').click()
        cy.get(':nth-child(1) > .Card_container__20AEq > .Card_meta__1XgjI > .Card_metaFooter__3rweh > .Card_addButton__15wE5 > [style="position: relative;"] > .sc-jIGnZt > .sc-fBdRDi > .sc-gfoqjT > .sc-ehixzo').click()
        cy.get(':nth-child(1) > .sc-bVHCgj > :nth-child(1) > :nth-child(3) > .sc-jrrFIm > .sc-guWVcn > .sc-gHCuMn > .sc-aXZVg').click()
        cy.get('[data-cy="customize-footer-add-button"]').click()
        cy.get('.styles_viewCart__32FxP > span').click()
        cy.get('.WO7LQ').click()
  
      })


})
})