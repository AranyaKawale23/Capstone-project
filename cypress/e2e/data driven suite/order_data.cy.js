describe('Swiggy Data-Driven Testing for Cities and Selectors', () => {
    const testdata = require("../../../swiggypg.json");
  
    it('should test each city and perform actions on each element', () => {
      // Loop through each city in the cities array
      testdata.cities.forEach((city) => {
        cy.log(`Testing city: ${city}`);
  
        // Navigate to Swiggy homepage
        cy.visit('https://www.swiggy.com/');
  
        // Loop through each element from the selectors
        testdata.selectors.elements.forEach((element) => {
          // Click on the element
          cy.get(element).first().click();
  
          // Click on the Swiggy link after the element is clicked
          cy.get(testdata.selectors.swiggyLink).click();
        });
  
        // Pagination actions: Next button click
        cy.get(testdata.selectors.nextButton).first().click();
        cy.get(testdata.selectors.nextButton).first().click();
  
        // Pagination actions: Previous button click
        cy.get(testdata.selectors.previousButton).first().click();
        cy.get(testdata.selectors.previousButton).first().click();
      });
    });
  });
  