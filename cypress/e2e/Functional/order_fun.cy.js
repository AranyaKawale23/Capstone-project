import HomePage from '../../../swiggy'; 
describe('Swiggy Homepage Interaction', () => {
    let homePage;
  
    beforeEach(() => {
      // Initialize homePage before each test run
      homePage = new HomePage(); 
    });
  
    it('should interact with various elements on the homepage', () => {
      // Step 1: Visit the Swiggy homepage
      homePage.visitHomePage();
      
      // Step 16: Click on different locations by index
      for (let i = 0; i < 10; i++) {
        homePage.clickLocation(i);  // Click on the location by index
        homePage.clickswiggyLink();  // Click the Swiggy link after selecting a location
      }
      
      // Step 17: Click next and previous buttons
      homePage.clickNextButton();
      homePage.clickNextButton();
      homePage.clickPreviousButton();
      homePage.clickPreviousButton();
    });
  });
  