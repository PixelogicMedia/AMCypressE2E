export class ImportFile {
	importButton = "button[data-original-title = 'Import Files']"
	selectStorageDropdown = "i[class='ant-select-arrow-icon anticon anticon-down']"
	mamEfsStorage = "li[contains(text(), 'wailua_efs_copy [Cairo]')]"
	popupStorage = "div[class='ant-modal-content']"
	closeZeft = "button[class='ant-modal-close']"
	searchZeft = "input[class='ant-input']"
	sssss = "input[placeholder=\"Add a tag..\"]"

	async clickImportFile() {
		cy.get(this.importButton).click();
	}

	async clickOnSelectStorage() {

		// const storageOb = cy.get(this.selectStorageDropdown)
		const pop = cy.get(this.popupStorage).should("visible")
		pop.get(this.sssss).type("HELLOOOOOOOOOOO")
		// cy.get(this.closeZeft).click()
		// pop.get(this.selectStorageDropdown).click()
		// pop.get(this.mamEfsStorage).click();
	}
}
