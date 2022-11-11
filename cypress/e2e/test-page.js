/// <reference types="Cypress"/>

import { checkout } from '../support/page_object/checkout'
import { navigateTo } from '../support/page_object/navigation'
import { locator } from '../support/locator/abstractPage'
import { onLogin } from '../support/page_object/login-command'
import { addItem, addItemToBasket } from '../support/page_object/add-item'
import Homepage from '../support/locator/Homepage'

describe('test page', () => {
	it('test page', () => {
		// // navigateTo.privacyPolicyPage()
		// navigateTo.displayItemPage(12)
		// checkout.checkoutWallet()
		onLogin.loginJuice('poy@example.com', 'poyoyo')
	})
})
