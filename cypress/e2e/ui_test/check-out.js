/// <reference types="Cypress"/>

import addressLoc from '../../support/locator/addressLoc'
import cartLoc from '../../support/locator/cartLoc'
import { addItemToBasket } from '../../support/page_object/add-item'
import { onLogin } from '../../support/page_object/login-command'

describe('Check out item ', () => {
	before('product', () => {
		cy.fixture('product').then(data => {
			globalThis.data = data
		})

		cy.fixture('userCredential').then(user => {
			globalThis.user = user
		})
	})

	beforeEach(() => {
		onLogin.loginJuice(globalThis.user.email, globalThis.user.password)
		cy.wait(1000)
	})

	it('Check out item on the basket', () => {
		cy.get(cartLoc.cartNav).should('be.visible').click({ force: true })
		cy.get(cartLoc.checkoutBtn).click({ force: true })
		cy.wait(1000)
		cy.get(addressLoc.selectRadioAddress)
			.should('be.visible')
			.click({ force: true })
		cy.get(cartLoc.nextBtn).should('be.visible').click({ force: true })
		cy.wait(1000)
		cy.get(cartLoc.oneDayDelivery).click({ force: true })
		cy.get(cartLoc.fastDelivery).should('not.be.checked')
		cy.get(cartLoc.standardDelivery).should('not.be.checked')
		cy.get(cartLoc.continueBtn)
			.should('not.be.disabled')
			.click({ force: true })
		cy.get(cartLoc.walletPayBtn).click()
		cy.wait(1500)
		globalThis.data.productName.forEach(element => {
			cy.get(cartLoc.productItemName).then(itemName => {
				cy.wrap(itemName).should('contain', element)
			})
		})
		cy.get(cartLoc.finalCheckoutBtn).should('be.visible').click()
		cy.get(cartLoc.confirmationMessage).should('be.visible')
		cy.get(cartLoc.confirmationDeliveryMessage).should('be.visible')
	})
})
