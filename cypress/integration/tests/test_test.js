// require('dotenv').config({path: '/Users/reemalim/AMCypressE2E/cypress/.env'})
// const commonUtilities = require("../utilities/commonUtilities")


describe("createSOW", () => {
	it('login to SSO', () => {
		// commonUtilities.loginToSSO();
		cy.visit(Cypress.env("SSO_URL"))
		cy.get('#username').clear().type(Cypress.env("USER_NAME"))
		cy.get('#password').clear().type(Cypress.env("PASSSWORD"))
		cy.get('#kc-login').click();
	})
});
