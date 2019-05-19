//Elements
const switchCompanyLink = ".at-switch-company";
const avalaraLogo = "li.at-current-company-landing img:nth-of-type(1)[alt='Avalara']";
const transactionsLink = "a[title='Transactions']";
const returnsLink = "a[title='Returns']";
const settingsTab = "a.at-navbar-settings";

Cypress.Commands.add("verifyLandingPageUI", () => { 
    cy.get(switchCompanyLink).should('be.visible')
        .get(avalaraLogo).should('be.visible')
        .get(transactionsLink).should('be.visible')
        .get(returnsLink).should('be.visible');
})