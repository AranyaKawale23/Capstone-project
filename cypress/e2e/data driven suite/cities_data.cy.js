describe('Swiggy City Links and Show More Test', () => {
    // Load test data from testdata1.json
    const testdata = require('../../../swiggypg.json');
    
    // Log the data to check its structure
    it('should log the testdata to debug', () => {
      cy.log(JSON.stringify(testdata)); // Log data to the console for debugging
    });
  
    it('should visit each city and click on "Show More" link', () => {
      // Loop through each city in the cities array from the JSON
      if (testdata.cities && Array.isArray(testdata.cities)) {
        testdata.cities.forEach((city) => {
          // Navigate to the Swiggy homepage
          cy.visit('https://www.swiggy.com/');
          
          // Click the link for the current city
          cy.contains(`Order food online in ${city}`).click();
        });
      } else {
        cy.log('No cities found or cities is not an array');
      }
  
      // After visiting all cities, visit the homepage again and click the 'Show More' link
      cy.visit('https://www.swiggy.com/');
      cy.contains('Show More').first().click();
    });
  });
  