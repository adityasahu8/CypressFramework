//Elements
const editCompanyLink = "a.at-settings-edit-company";
const nexusLink = "a.at-settings-nexus p";
const itemsLink = "a.at-settings-setup-items";
const locationsLink = "a.at-settings-locations";
const thresholdsLink = ".at-settings-sales-thresholds";
const advancedCompanySettingsLink = "a.at-settings-advanced";
const manageCompaniesLink = "a.at-settings-manage-companies";
const advancedAccountSettingsLink = "a.at-settings-advanced-account";
const licenseKeyLink = "a.at-settings-access-keys";
const manageUsersLink = "a.at-settings-users";

Cypress.Commands.add("verifySettingsPageUI", () => { 
    cy.get(editCompanyLink).should('be.visible')
        .get(nexusLink).should('be.visible')
        .get(itemsLink).should('be.visible')
        .get(locationsLink).should('be.visible')
        .get(thresholdsLink).should('be.visible')
        .get(advancedCompanySettingsLink).should('be.visible')
        .get(manageCompaniesLink).should('be.visible')
        .get(advancedAccountSettingsLink).should('be.visible')
        .get(licenseKeyLink).should('be.visible')
        .get(manageUsersLink).should('be.visible');
});