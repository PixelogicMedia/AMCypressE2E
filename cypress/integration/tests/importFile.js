// const commonUtilities = require("../../../am-cypress-e2e/cypress/utilities/commonUtilities")
import {ImportFile} from '../pages/importFile'

const importFile = new ImportFile();
it('login to SSO', async () => {
	// commonUtilities.loginToSSO();
	cy.visit(Cypress.env('SSO_URL'))
		.get('#username').clear().type(Cypress.env("USER_NAME"))
		.get('#password').clear().type(Cypress.env("PASSSWORD"))
		.get('#kc-login').click()
		.window().maximum
		await importFile.clickImportFile()
		// await importFile.clickOnSelectStorage();

})
