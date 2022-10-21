/// <reference types="Cypress"/>

import { onLogin } from '../support/page_object/login-command'

describe('Search item', () => {
	let search = [
		'Apple Pomace',
		'Banana Juice (1000ml)',
		'Melon Bike (Comeback-Product 2018 Edition)',
	]

	describe('searching', () => {
		beforeEach(() => {
			cy.visit('http://localhost:3000/#/')
			cy.wait(1000)
			cy.get('.mat-button-wrapper').contains('Dismiss').click()
		})

		it('Validate the search item and add to cart', () => {
			cy.wrap(search).each(search => {
				cy.get('#searchQuery').click()
				cy.get('#mat-input-0')
					.clear({ force: true })
					.type(search)
					.type('{enter}')
				cy.get('.item-name').then(itemName => {
					cy.wrap(itemName).should('contain', search)
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
			cy.wrap(search).each(search => {
				cy.get('#searchQuery').click()
				cy.get('#mat-input-0')
					.clear({ force: true })
					.type(search)
					.type('{enter}')
				cy.get('.item-name').then(itemName => {
					cy.wrap(itemName).should('contain', search)
					cy.get('.mat-button-wrapper')
						.contains('Add to Basket')
						.click()
				})
			})
			cy.get('.mat-button-wrapper').contains('Your Basket').click()
			cy.get('.cdk-column-product').eq(1).should('contain', search[0])
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
