/// <reference types="Cypress"/>

import { checkout } from '../support/page_object/checkout'
import { navigateTo } from '../support/page_object/navigation'

describe('test page', () => {
	it('test page', () => {
		navigateTo.visitPage()
		navigateTo.loginPage()
		cy.get('#email').type('poy@example.com')
		cy.get('#password').type('poyoyo')
		cy.get('#loginButton').click()
		// navigateTo.privacyPolicyPage()
		navigateTo.displayItemPage(12)
		checkout.checkoutWallet()
	})
})
