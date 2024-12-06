describe('Swiggy Tests', () => {
    it('test', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Bangalore').click();
    });
  
    it('test1', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Gurgaon').click();
    });
  
    it('test2', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Hyderabad').click();
    });
  
    it('test3', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Delhi').click();
    });
  
    it('test4', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Mumbai').click();
    });
  
    it('test5', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Pune').click();
    });
  
    it('test6', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Kolkata').click();
    });
  
    it('test7', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Chennai').click();
    });
  
    it('test8', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Ahmedabad').click();
    });
  
    it('test9', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Chandigarh').click();
    });
  
    it('test10', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Order food online in Jaipur').click();
    });
  
    it('test11', () => {
      cy.visit('https://www.swiggy.com/');
      cy.contains('Show More').first().click();
    });
  });
  