import HomePage from '../../../swiggy';  // Adjust the relative path as needed

describe('Swiggy Tests', () => {
    let homePage;

    beforeEach(() => {
        // Initialize the homePage object before each test
        homePage = new HomePage();
        homePage.visitHomePage();  // Visit the Swiggy homepage before each test
    });

    it('test - Verify URL', () => {
        cy.url().should('eq', 'https://www.swiggy.com/');
    });

    it('test1 - Verify Title', () => {
        cy.title().should('eq', 'Order Food & Groceries. Discover the best restaurants. Swiggy it!');
    });

    it('test2 - Verify Swiggy Logo', () => {
        homePage.clickLogo();
    });

    it('test3 - Verify Swiggy Corporate Link', () => {
        homePage.clickCorporateLink();
    });

    it('test4 - Verify Partner with Us Link', () => {
        homePage.clickPartnerLink();
    });

    it('test5 - Verify Get the App Link', () => {
        homePage.clickGetTheAppLink();
    });

    it('test6 - Verify Sign In Link', () => {
        homePage.clickSignInLink();
    });

    it('test7 - Verify Close Sidebar after Sign In', () => {
        homePage.closeSidebar();
    });

    it('test8 - Verify Delivery Location Input', () => {
        homePage.enterDeliveryLocation('nehru nagar');
    });

    it('test9 - Verify Search Bar for Restaurants', () => {
        homePage.clickSearchBar();
    });

    it('test10 - Verify Swiggy Link from Search Results', () => {
        homePage.clickSearchResultLink();
    });

    it('test11 - Verify Food Delivery Section', () => {
        homePage.clickFoodDeliverySection();
    });

    it('test12 - Verify Swiggy Link from Food Section', () => {
        homePage.clickFoodDeliverySection(); // Same action for this test case
    });

    it('test13 - Verify Instamart Link', () => {
        homePage.clickInstamartLink();
    });

    it('test14 - Verify Order Food & Groceries Link', () => {
        cy.contains('Order food & groceries.').click();
    });

    it('test15 - Verify Dine-in Link', () => {
        homePage.clickDineInLink();
    });

    it('test16 - Verify Genie Link', () => {
        homePage.clickGenieLink();
    });
});
