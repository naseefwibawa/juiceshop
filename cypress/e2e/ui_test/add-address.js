/// <reference types="Cypress" />

import AccountPage from '../../support/locator/AccountPage'
import addressLoc from '../../support/locator/addressLoc'
import OrderPaymentPage from '../../support/locator/OrderAndPayment'
import { AddressCheck } from '../../support/page_object/address'
import { onLogin } from '../../support/page_object/login-command'
import { navigateTo } from '../../support/page_object/navigation'

describe('Add address', () => {
	before(() => {
		cy.fixture('address').then(data => {
			globalThis.data = data
		})

		cy.fixture('userCredential').then(user => {
			globalThis.user = user
		})
	})

	beforeEach(() => {
		onLogin.loginJuice(globalThis.user.email, globalThis.user.password)
	})

	it.only('add address', () => {
		navigateTo.addNewAddressPage()
		cy.wait(1000)
		AddressCheck.checkRequiredField()
		AddressCheck.addNewAddress(
			globalThis.data.userCountry,
			globalThis.data.username,
			globalThis.data.userMobileNumber,
			globalThis.data.userZIPcode,
			globalThis.data.userAddress,
			globalThis.data.userCity,
			globalThis.data.userState
		)
	})

	it('update address', () => {
		navigateTo.addressPage()
		AddressCheck.updateUserAddress(globalThis.data.userCity, 'Argentinoz')
	})

	it('remove the addess', () => {
		navigateTo.addressPage()
		AddressCheck.removeUserAddress(globalThis.data.userCity)
	})
})
