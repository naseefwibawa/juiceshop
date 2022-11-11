import addressLoc from '../locator/addressLoc'

export class address {
	checkRequiredField() {
		cy.get(addressLoc.countryField).should('have.attr', 'required')
		cy.get(addressLoc.nameField).should('have.attr', 'required')
		cy.get(addressLoc.mobileNumberField).should('have.attr', 'required')
		cy.get(addressLoc.ZIPcodeField).should('have.attr', 'required')
		cy.get(addressLoc.addressField).should('have.attr', 'required')
		cy.get(addressLoc.cityField).should('have.attr', 'required')
		cy.get(addressLoc.stateField).should('not.have.attr', 'required')
	}

	addNewAddress(
		userCountry,
		username,
		userMobileNumber,
		userZIPcode,
		userAddress,
		userCity,
		userState
	) {
		cy.get(addressLoc.countryField).type(userCountry)
		cy.get(addressLoc.nameField).type(username)
		cy.get(addressLoc.mobileNumberField).type(userMobileNumber)
		cy.get(addressLoc.ZIPcodeField).type(userZIPcode)
		cy.get(addressLoc.addressField).type(userAddress)
		cy.get(addressLoc.cityField).type(userCity)
		cy.get(addressLoc.stateField).type(userState)
		cy.get(addressLoc.submitBtn).should('contain', 'Submit').click()
		cy.get(addressLoc.confirmationAddressAdded).should(
			'contain',
			'The address at ' +
				userCity +
				' has been successfully added to your addresses.'
		)
	}

	updateUserAddress(userCity, newUserCity) {
		cy.get(addressLoc.addressTable)
			.contains(addressLoc.addressRow, userCity)
			.then(element => {
				cy.wrap(element).find(addressLoc.editAddressBtn).click()
			})
		cy.get(addressLoc.cityField).clear().type(newUserCity)
		cy.get(addressLoc.submitBtn).click()
		cy.get(addressLoc.confirmationAddressAdded).should(
			'contain',
			'The address at ' + newUserCity + ' has been successfully updated.'
		)
	}

	removeUserAddress(userCity) {
		cy.get(addressLoc.addressTable)
			.contains(addressLoc.addressRow, userCity)
			.then(element => {
				cy.wrap(element).find(addressLoc.removeAddressBtn).click()
			})
		cy.get(addressLoc.confirmationAddressAdded).should(
			'contain',
			'Your address has been removed.'
		)
	}
}

export const AddressCheck = new address()
