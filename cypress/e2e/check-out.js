/// <reference types="Cypress"/>

import { addItemToBasket } from '../support/page_object/add-item'
import { onLogin } from '../support/page_object/login-command'

describe('Check out item ', () => {
	before('product', () => {
		cy.fixture('product').then(data => {
			globalThis.data = data
		})
	})

	beforeEach(() => {
		onLogin.loginJuice('poy@example.com', 'poyoyo')
		cy.wait(1000)
	})

	it('Check out item on the basket', () => {
		cy.get('.mat-button-wrapper')
			.contains('Your Basket')
			.click({ force: true })
		cy.get('#checkoutButton').click({ force: true })
		cy.wait(2000)
		cy.get('#mat-radio-41').click()
		cy.get('.mat-button-wrapper')
			.contains('Continue')
			.click({ force: true })
		cy.wait(2000)
		cy.get('#mat-radio-44').click()
		cy.get('.mat-button-wrapper')
			.contains('Continue')
			.click({ force: true })
		cy.get('[type="radio"]').check({ force: true }).should('be.checked')
		cy.get('.mat-button-wrapper')
			.find('.fa-hand-holding-usd')
			.click({ force: true })
		cy.wait(2000)
		globalThis.data.productName.forEach(element => {
			cy.get('.cdk-column-product').then(itemName => {
				cy.wrap(itemName).should('contain', element)
			})
		})
		cy.get('.mat-button-wrapper')
			.contains('Place your order and pay')
			.click()
		cy.get('.confirmation').should(
			'contain',
			'Thank you for your purchase!'
		)
	})
})
