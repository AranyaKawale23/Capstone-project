describe('Swiggy Tests', () => {
    it('test - Verify URL', () => {
      cy.visit('https://www.swiggy.com/');
      cy.url().should('eq', 'https://www.swiggy.com/');
    });
  
    it('test1 - Verify Title', () => {
      cy.visit('https://www.swiggy.com/');
      cy.title().should('eq', 'Order Food & Groceries. Discover the best restaurants. Swiggy it!');
    });
  
    it('test2 - Verify Swiggy Logo', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('._1NDpI').click();
    });
  
    it('test3 - Verify Swiggy Corporate Link', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('.Uccaw > [href="https://www.swiggy.com/corporate/"]').click();
    });
  
    it('test4 - Verify Partner with Us Link', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Partner with us').first().click();
    });
  
    it('test5 - Verify Get the App Link', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Get the App').click();
    });
  
    it('test6 - Verify Sign In Link', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Sign in').click();
    });
  
    it('test7 - Verify Close Sidebar after Sign In', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('._5-C04').click();
      cy.get('._2S7hX').click();
    });
  
    it('test8 - Verify Delivery Location Input', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('[placeholder="Enter your delivery location"]').click();
      cy.get('[placeholder="Enter your delivery location"]').type('nehru nagar');
    });
  
    it('test9 - Verify Search Bar for Restaurants', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Search for restaurant, item').click();
    });
  
    it('test10 - Verify Swiggy Link from Search Results', () => {
      cy.visit('https://www.swiggy.com/');
      ccy.get('.sc-cYxjnA > .sc-aXZVg').click();
    });
  
    it('test11 - Verify Food Delivery Section', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('[data-testid="navbar_container__2337992"] > .sc-AHTeh > .sc-bXCLTC').click();
    });
  
    it('test12 - Verify Swiggy Link from Food Section', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('[data-testid="navbar_container__2337992"] > .sc-AHTeh > .sc-bXCLTC').click();
    });
  
    it('test13 - Verify Instamart Link', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('[data-testid="navbar_container__2337995"] > .sc-kqGoIF > .sc-bXCLTC').click();
    });
  
    it('test14 - Verify Order Food & Groceries Link', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food & groceries.').click();
    });
  
    it('test15 - Verify Dine-in Link', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('[data-testid="navbar_container__2337999"] > .sc-kqGoIF > .sc-bXCLTC').click();
    });
  
    it('test16 - Verify Genie Link', () => {
      cy.visit('https://www.swiggy.com/');
      cy.get('[data-testid="navbar_container__3018050"] > .sc-kqGoIF > .sc-bXCLTC').contains('Genie').click();
    });
  });
  