//Elements
const usernameTextBox = "input#Username";
const passwordTextBox = "input#Password";
const loginButton = "button#loading";

Cypress.Commands.add("verifyLoginPageUI", () => { 
    cy.get(usernameTextBox).should('be.visible')
        .get(passwordTextBox).should('be.visible')
        .get(loginButton).should('be.visible');
})