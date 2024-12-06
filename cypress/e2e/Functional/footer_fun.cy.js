import SwiggyFooterPage from '../../../swiggy'; // Adjust the relative path as needed

describe('Swiggy Tests', () => {
    let footerPage;

    beforeEach(() => {
        // Initialize the footerPage object before each test
        footerPage = new SwiggyFooterPage();
        cy.visit('https://www.swiggy.com/'); // Visit the Swiggy homepage
        cy.url().should('eq', 'https://www.swiggy.com/');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent uncaught exceptions from failing the test
        });
    });

    it('test - Verify URL', () => {
        cy.url().should('eq', 'https://www.swiggy.com/');
    });

    it('test About Us', () => {
        footerPage.clickAboutUs();
        cy.contains('About Us').should('exist');
    });

    it('test Swiggy Corporate', () => {
        footerPage.clickCorporate();
        cy.contains('corporate').should('exist');
    });

    it('test Careers', () => {
        footerPage.clickCareers();
       
    });

    it('test Team', () => {
        footerPage.clickTeam();
        
    });

    it('test Swiggy One', () => {
        footerPage.clickSwiggyOne();
        
    });

    it('test Swiggy Instamart', () => {
        footerPage.clickInstamart();
        
    });

    it('test Swiggy Dineout', () => {
        footerPage.clickDineout();
        
    });

    it('test Swiggy Genie', () => {
        footerPage.clickGenie();
        
    });

    it('test Minis', () => {
        footerPage.clickMinis();
        
    });

    it('test Help & Support', () => {
        footerPage.clickHelpSupport();
        
    });

    it('test Partner with Us', () => {
        footerPage.clickPartnerWithUs();
        
    });

    it('test Ride with Us', () => {
        footerPage.clickRideWithUs();
        
    });

    it('test Terms & Conditions', () => {
        footerPage.clickTermsConditions();
        
    });

    it('test Cookie Policy', () => {
        footerPage.clickCookiePolicy();
        
    });

    it('test Privacy Policy', () => {
        footerPage.clickPrivacyPolicy();
        
    });

    it('test Explore with Swiggy', () => {
        footerPage.clickExploreWithSwiggy();
       
    });

    it('test Swiggy News', () => {
        footerPage.clickSwiggyNews();
       
    });

    it('test Snackables', () => {
        footerPage.clickSnackables();
        
    });

    it('test Linkedin', () => {
        footerPage.clickLinkedin();
    });

    it('test Instagram', () => {
        footerPage.clickInstagram();
    });

    it('test Facebook', () => {
        footerPage.clickFacebook();
    });

    it('test Pinterest', () => {
        footerPage.clickPinterest();
    });

    it('test Twitter', () => {
        footerPage.clickTwitter();
    });
});
