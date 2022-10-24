/// <reference types="Cypress"/>

import { addItem, addItemToBasket } from '../../support/page_object/add-item'
import { onLogin } from '../../support/page_object/login-command'

describe('Add item to the basket ', () => {
	before('product', () => {
		cy.fixture('product').then(data => {
			globalThis.data = data
		})
	})

	beforeEach(() => {
		onLogin.loginJuice('poy@example.com', 'poyoyo')
		cy.wait(2000)
	})

	it.only('Add multiple item to the basket', () => {
		globalThis.data.productName.forEach(element => {
			addItemToBasket.addProduct(element)
		})
	})

	it('Remove all item in the basket', () => {
		globalThis.data.productName.forEach(element => {
			addItemToBasket.removeItem(element)
		})
		cy.get('.fa-layers-counter').should('contain', 0)
	})
})
