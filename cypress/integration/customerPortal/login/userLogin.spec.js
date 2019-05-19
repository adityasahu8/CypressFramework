
import '../../../support/commands';
import '../../../support/pages/login/loginPage';
import '../../../support/pages/general/companyLandingPage';

let loginTitle, userName, password, companyLandingTitle;

describe('Customer Portal Verification', function(){
    
    before(function(){
        cy.launchURL();
        cy.fixture("customerPortal").then((data) => {
            loginTitle = data.loginPageTitle;
            userName = data.userName;
            password = data.password;
            companyLandingTitle = data.companyLandingTitle;
        });
    });

    it('Verify the UI of Login Page', function(){
        cy
            .pageTitle(loginTitle)
            .verifyLoginPageUI()
            .login(userName, password)
            .pageTitle(companyLandingTitle);
    });
});