//Elements
const transactionsTab = "li.at-navbar-transactions>a";
const transactionsListTab = "a.at-nav-transactions-list";
const exemptionsTab = "a.at-navbar-exemptions";
const returnsTab = "li.at-navbar-returns>a";
const reportsTab = "a.at-navbar-reports";
const settingsTab = "a.at-navbar-settings";

Cypress.Commands.add("verifyNavigationBarTabs", () => { 
    cy.get(transactionsTab).should('be.visible')
        .get(exemptionsTab).should('be.visible')
        .get(returnsTab).should('be.visible')
        .get(reportsTab).should('be.visible')
        .get(settingsTab).should('be.visible');
});

Cypress.Commands.add("navigateToSettingsTab", () => { 
    cy.get(settingsTab).click();
});