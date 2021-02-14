// const commonUtilities = require("../../../am-cypress-e2e/cypress/utilities/commonUtilities")

it('login to SSO', () => {
	// commonUtilities.loginToSSO();
	cy.visit(Cypress.env('SSO_URL'));
	cy.get('#username').clear().type(Cypress.env("USER_NAME"));
	cy.get('#password').clear().type(Cypress.env("PASSSWORD"));
	cy.get('#kc-login').click();
	// cy.visit("https://vidivue-test.pixelogicmedia.us/explore");
})
