
import '../../../../support/commands';
import '../../../../support/pages/login/loginPage';
import '../../../../support/pages/general/companyLandingPage';
import '../../../../support/pages/general/navigationBar';
import '../../../../support/pages/settings/settingsPage';
import '../../../../support/pages/settings/items/itemsDetailsPage';
import '../../../../support/pages/settings/items/itemsListPage';

let loginTitle, userName, password, companyLandingTitle;

describe('Create Items', function(){
    
    before(function(){
        cy.fixture("customerPortal").then((data) => {
            loginTitle = data.loginPageTitle;
            userName = data.userName;
            password = data.password;
            companyLandingTitle = data.companyLandingTitle;
        });

        cy.launchURL();
    });

    it('Login and Verify UI', function(){
        cy.pageTitle(loginTitle);
        cy.login(userName, password);
        cy.pageTitle(companyLandingTitle);
    })

    it('Navigate to Settings Tab and Verify UI', function(){
        cy.verifyLandingPageUI();
        cy.verifyNavigationBarTabs();
        cy.navigateToSettingsTab();
        cy.verifySettingsPageUI();
    })

    it('Navigate to Items list page and verify UI', function(){
        cy.verifySettingsPageUI();
    })
});