describe('Swiggy Data-Driven Testing', () => {
    const testdata = require("../../../swiggy.json");
  
    it('should perform data-driven testing for Swiggy', () => {
      // Test the home page
      cy.visit(testdata.urls.swiggyHome);
  
      // Verify URL
      cy.url().should('eq', testdata.urls.swiggyHome);
  
      // Verify title
      cy.title().should('eq', 'Order Food & Groceries. Discover the best restaurants. Swiggy it!');
  
      // Verify swiggy logo click
      cy.get(testdata.roles.swiggyLogo).click();
  
      // Verify Swiggy Corporate link
      cy.contains(testdata.roles.swiggyCorporateLink).click();
      cy.url().should('include', testdata.urls.swiggyCorporate);
      cy.visit(testdata.urls.swiggyHome);
  
      // Verify Partner With Us link
      cy.contains(testdata.roles.partnerWithUsLink).click();
      cy.url().should('include', testdata.urls.partnerWithUs);
      cy.visit(testdata.urls.swiggyHome);
  
      // Verify Get the App link
      cy.contains(testdata.texts.getTheAppText).click();
      cy.url().should('include', testdata.urls.getTheApp);
  
      // Verify Sign In link
      cy.contains(testdata.texts.signInText).click();
      cy.url().should('include', testdata.urls.signIn);
  
      // Close sidebar after sign in
      cy.get('#overlay-sidebar-root span').click();
  
      // Verify Delivery Location
      cy.get('input[placeholder="' + testdata.texts.searchPlaceholder + '"]').click();
      cy.get('input[placeholder="' + testdata.texts.searchPlaceholder + '"]').type('nehru nagar');
      cy.get('button[aria-label="Use my current location"]').click();
  
      // Verify search bar for restaurant
      cy.contains(testdata.texts.searchBarText).click();
  
      // Verify "Swiggy" link click from search bar
      cy.contains('Swiggy').click();
  
      // Verify Food Delivery link
      cy.get('[data-testid="navbar_container__2337992"]').find('a').contains(testdata.roles.foodDeliveryLink).click();
      cy.contains('Swiggy').click();
  
      // Verify Instamart link
      cy.contains(testdata.roles.instamartLink).click();
      cy.visit(testdata.urls.swiggyHome);
      cy.contains('Order food & groceries.').click();
  
      // Verify Genie link
      cy.get('[data-testid="navbar_container__3018050"]').find('a').contains(testdata.roles.genieLink).click();
      cy.visit(testdata.urls.swiggyHome);
    });
  });
  