/// <reference types="Cypress"/>

import { checkout } from '../support/page_object/checkout'
import { navigateTo } from '../support/page_object/navigation'
import { locator } from '../support/locator/test'
import { onLogin } from '../support/page_object/login-command'
import { addItem, addItemToBasket } from '../support/page_object/add-item'

describe('test page', () => {
	it('test page', () => {
		// cy.visit('/')
		// navigateTo.visitPage()
		// navigateTo.loginPage()
		// cy.get(locator.email).type('poy@example.com')
		// cy.get(locator.password).type('poyoyo')
		// cy.get('#loginButton').click()
		// // navigateTo.privacyPolicyPage()
		// navigateTo.displayItemPage(12)
		// checkout.checkoutWallet()
		onLogin.loginJuice('poy@example.com', 'poyoyo')
		addItemToBasket.removeItem('Apple Pomace')
	})
})
