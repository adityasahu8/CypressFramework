//Commands
Cypress.Commands.add("launchURL", () => { 
    cy.visit("https://portal-qa.avlr.sh");
})

Cypress.Commands.add("pageTitle", (title) => { 
    cy.title({timeout: 100000}).should('contain', title);
})
