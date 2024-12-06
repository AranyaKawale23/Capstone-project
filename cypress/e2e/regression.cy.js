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

    it('test About Us', () => {
        cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(2) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('About Us').click();
      });
    
      it('test Swiggy Corporate', () => {
        cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(3) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('corporate').click();
      });
    
      it('test Careers', () => {
        cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(4) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('careers').click();
      });
    
      it('test Team', () => {
        cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(5) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);

      });
    
      it('test Swiggy One', () => {
        cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(6) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
      });
    
      it('test Swiggy Instamart', () => {
        cy.get(':nth-child(2) > .sc-kpDqfm > :nth-child(7) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Swiggy Instamart').click();
       
      });
    
      it('test Swiggy Dineout', () => {
        cy.get('.sc-kpDqfm > :nth-child(8) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Swiggy Dineout').click();
        
      });
    
      it('test Swiggy Genie', () => {
        cy.get('.sc-kpDqfm > :nth-child(9) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Swiggy Genie').click();
        
      });
    
      it('test Minis', () => {
        cy.get('.sc-kpDqfm > :nth-child(10) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Minis').click();
       
      });
    
      it('test Help & Support', () => {
        cy.get(':nth-child(3) > .sc-kpDqfm > :nth-child(2) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Help & Support').click();
      
      });
    
      it('test Swiggy', () => {
        cy.visit('https://www.swiggy.com/');
        cy.contains('Swiggy').click();
        
      });
    
      it('test Partner with Us', () => {
        cy.get(':nth-child(3) > .sc-kpDqfm > :nth-child(3) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Partner with us').click();
       
      });
    
      it('test Ride with Us', () => {
        cy.get(':nth-child(3) > .sc-kpDqfm > :nth-child(4) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Ride with us').click();
        
      });
    
      it('test Terms & Conditions', () => {
        cy.get(':nth-child(4) > .sc-kpDqfm > :nth-child(2) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Terms & Conditions').click();
        
      });
    
      it('test Cookie Policy', () => {
        cy.get(':nth-child(4) > .sc-kpDqfm > :nth-child(3) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Cookie Policy').click();
      
      });
    
      it('test Privacy Policy', () => {
        cy.get(':nth-child(4) > .sc-kpDqfm > :nth-child(4) > .sc-dLMFU > .sc-aXZVg').click().wait(5000);
        cy.contains('Privacy Policy').click();
      
      });
    
      it('test Explore with Swiggy', () => {
        cy.get(':nth-child(6) > .sc-kpDqfm > :nth-child(2) > a > .sc-aXZVg').click().wait(5000);
        cy.contains('Explore with Swiggy').click();
        
      });
    
      it('test Swiggy News', () => {
        cy.get(':nth-child(6) > .sc-kpDqfm > :nth-child(2) > a > .sc-aXZVg').click().wait(5000);
        cy.contains('Swiggy News').click();
        
      });
    
      it('test Snackables', () => {
        ccy.get(':nth-child(6) > .sc-kpDqfm > :nth-child(4) > a > .sc-aXZVg').click().wait(5000);
        cy.contains('Snackables').click();
        
      });
    
      it('test Linkedin', () => {
        cy.get('[href="https://www.linkedin.com/company/swiggy-in/"] > img').click().wait(5000);
        cy.contains('Linkedin').click();
        cy.url().should('include', 'linkedin');
      });
    
      it('test Instagram', () => {
        cy.get('[href="https://www.instagram.com/swiggyindia/?hl=en"] > img').click().wait(5000);
        cy.contains('Instagram').click();
        cy.url().should('include', 'instagram');
      });
    
      it('test Facebook', () => {
        cy.get('[href="https://www.facebook.com/swiggy.in/"] > img').click().wait(5000);
        cy.contains('Facebook').click();
        cy.url().should('include', 'facebook');
      });
    
      it('test Pinterest', () => {
        cy.get('[href="https://in.pinterest.com/swiggyindia/"] > img').click().wait(5000);
        cy.contains('Pinterest').click();
        cy.url().should('include', 'pinterest');
      });
    
      it('test Twitter', () => {
        cy.get('[href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"] > img').click();
        cy.contains('Twitter').click();
        cy.url().should('include', 'twitter');
      });
    
    });
    

 