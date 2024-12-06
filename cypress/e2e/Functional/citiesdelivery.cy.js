import HomePage from '../../../swiggy';  // Import the HomePage class

describe('Test Swiggy Website', () => {
  let homePage;

  beforeEach(() => {
    // Visit the Swiggy homepage before each test
    homePage = new HomePage();
    homePage.visitHomePage();
  });

  it('should add items to the cart and log in', () => {
    // Step 1: Click on the 'Order food online in Bangalore' link
    homePage.clickOrderFoodLink();

    // Step 2: Click on 'restaurants curated for dosa' label
    homePage.selectDosaRestaurants();

    // Step 3: Click on the specific offer link (₹100 OFF ABOVE ₹249Saiva)
    homePage.selectOffer();

    // Step 4: Add the first item to the cart
    homePage.addFirstItemToCart();

    // Step 5: Add the second item to the cart
    homePage.addSecondItemToCart();

    // Step 6: View the cart
    homePage.viewCart();

    // Step 7: Click on the 'LOG IN' link
    homePage.clickLoginLink();
  });
});
