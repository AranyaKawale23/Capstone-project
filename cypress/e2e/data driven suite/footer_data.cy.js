describe('Swiggy Tests', () => {
    const testdata = require("../../../swiggy.json");
  
    it('should verify swiggy logo click', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.get(testdata.roles.swiggyLogo).click();
    });
  
    it('should verify Swiggy Corporate link', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains(testdata.roles.swiggyCorporateLink).click();
      cy.url().should('include', testdata.urls.swiggyCorporate);
    });
  
    it('should verify Partner with Us link', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains(testdata.roles.partnerWithUsLink).click();
      cy.url().should('include', testdata.urls.partnerWithUs);
    });
  
    it('should verify Get the App link', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains(testdata.texts.getTheAppText).click();
      cy.url().should('include', testdata.urls.getTheApp);
    });
  
    it('should verify Sign In link', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains(testdata.texts.signInText).click();
      cy.url().should('include', testdata.urls.signIn);
    });
  
    it('should close sidebar after sign in', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.get('#overlay-sidebar-root span').click();
    });
  
    it('should enter delivery location', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.get('input[placeholder="' + testdata.texts.searchPlaceholder + '"]').click();
      cy.get('button[aria-label="Use my current location"]').click();
    });
  
    it('should search for restaurant, item', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains(testdata.texts.searchBarText).click();
    });
  
    it('should click on Swiggy link', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains('Swiggy').click();
      cy.url().should('eq', testdata.urls.swiggyHome);
    });
  
    it('should click on food section', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.get('[data-testid="navbar_container__2337992"]')
        .find('a')
        .contains(testdata.roles.foodDeliveryLink)
        .click();
      cy.url().should('include', '/food');
    });
  
    it('should click on Swiggy link from food section', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains('Swiggy').click();
      cy.url().should('eq', testdata.urls.swiggyHome);
    });
  
    it('should click Instamart link', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains(testdata.roles.instamartLink).click();
      cy.url().should('include', '/instamart');
    });
  
    it('should click Dine-in link', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.contains('DO').click();
      cy.url().should('include', '/dine-in');
    });
  
    it('should click Genie link', () => {
      cy.visit(testdata.urls.swiggyHome);
      cy.get('[data-testid="navbar_container__3018050"]')
        .find('a')
        .contains(testdata.roles.genieLink)
        .click();
      cy.url().should('include', '/genie');
    });
  });
  