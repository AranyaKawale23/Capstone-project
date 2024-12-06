import SwiggyHomePage from '../../../swiggy';  // Adjust the relative path as needed

describe('Swiggy Tests', () => {
    let homePage;

    beforeEach(() => {
        // Initialize the homePage object before each test
        homePage = new SwiggyHomePage();
        homePage.visitHomePage();  // Visit the Swiggy homepage before each test
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })    
    });

    it('test1 - Add First Restaurant to Cart and Proceed to Checkout', () => {
        homePage.clickFirstRestaurant();
        cy.wait(5000); // Wait for the page to load
        homePage.clickSecondRestaurant();
        cy.wait(5000); // Wait for the page to load
        homePage.addFirstRestaurantToCart();
        homePage.viewFirstRestaurantDetails();
        homePage.customizeAndAddToCart();
        homePage.viewCart();
        homePage.proceedToCheckout();
    });

    it('test2 - Add First and Second Restaurants to Cart and Proceed to Checkout', () => {
        homePage.clickFirstRestaurant();
        cy.wait(5000); // Wait for the page to load
        homePage.addFirstRestaurantToCart();
        homePage.viewFirstRestaurantDetails();
        homePage.customizeAndAddToCart();
        homePage.viewCart();
        homePage.proceedToCheckout();
        
        // Add second restaurant to cart
        homePage.clickSecondRestaurant();
        cy.wait(5000); // Wait for the page to load
        homePage.addSecondRestaurantToCart();
        homePage.viewCart();
        homePage.proceedToCheckout();
    });
});
