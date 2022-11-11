/// <reference types="Cypress"/>

import AccountPage from '../../support/locator/AccountPage'
import Homepage from '../../support/locator/Homepage'
import { onLogin } from '../../support/page_object/login-command'

describe('Search item', () => {
	before('product', () => {
		cy.fixture('product').then(data => {
			globalThis.data = data
		})
	})

	describe('searching', () => {
		beforeEach(() => {
			cy.visit('http://localhost:3000/#/')
			cy.wait(1000)
			cy.get(Homepage.dismissBtn).should('be.visible').click()
		})

		it('Validate the search item and add to cart', () => {
			globalThis.data.productName.forEach(element => {
				cy.get(Homepage.searchBtn).click()
				cy.get(Homepage.inputSearchField)
					.clear({ force: true })
					.type(element)
					.type('{enter}')
				cy.get('.item-name').then(itemName => {
					cy.wrap(itemName).should('contain', element)
				})
			})
		})
	})

	describe('Add item to basket', () => {
		beforeEach(() => {
			onLogin.loginJuice('poy@example.com', 'poyoyo')
			cy.wait(2000)
		})
		it('Add item to basket', () => {
			globalThis.data.productName.forEach(element => {
				cy.get(Homepage.searchBtn).click()
				cy.get(Homepage.inputSearchField)
					.clear({ force: true })
					.type(element)
					.type('{enter}')
				cy.get('.item-name').then(itemName => {
					cy.wrap(itemName).should('contain', element)
					cy.get('.mat-button-wrapper')
						.contains('Add to Basket')
						.click()
				})
			})
		})

		it('Add and remove item in the basket', () => {
			cy.get('.mat-button-wrapper').contains('Your Basket').click()
			cy.get('.mat-row')
				.eq(0)
				.find('.fa-plus-square')
				.click({ force: true })
			cy.get('.mat-row')
				.eq(1)
				.find('.fa-minus-square')
				.click({ force: true })
			cy.get('.mat-row')
				.eq(2)
				.find('.fa-trash-alt')
				.click({ force: true })
		})
	})
})
