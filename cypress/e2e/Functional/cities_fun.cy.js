import HomePage from '../../../swiggy';  // Adjust the relative path as needed

describe('Swiggy Tests', () => {
    let homePage;

    beforeEach(() => {
        // Initialize the homePage object before each test
        homePage = new HomePage();
        homePage.visitHomePage();  // Visit the Swiggy homepage before each test
    });

    it('should click on Bangalore location link', () => {
        homePage.visitBangalore();
    });

    it('should click on Gurgaon location link', () => {
        homePage.visitGurgaon();
    });

    it('should click on Hyderabad location link', () => {
        homePage.visitHyderabad();
    });

    it('should click on Delhi location link', () => {
        homePage.visitDelhi();
    });

    it('should click on Mumbai location link', () => {
        homePage.visitMumbai();
    });

    it('should click on Pune location link', () => {
        homePage.visitPune();
    });

    it('should click on Kolkata location link', () => {
        homePage.visitKolkata();
    });

    it('should click on Chennai location link', () => {
        homePage.visitChennai();
    });

    it('should click on Ahmedabad location link', () => {
        homePage.visitAhmedabad();
    });

    it('should click on Chandigarh location link', () => {
        homePage.visitChandigarh();
    });

    it('should click on Jaipur location link', () => {
        homePage.visitJaipur();
    });

    it('should click the Show More link', () => {
        homePage.clickShowMore();
    });
});
