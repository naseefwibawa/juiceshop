/// <reference types="Cypress"/>

import { onLogin } from '../support/page_object/login-command'

describe('Add debit or credit card', () => {
	let cardNumber =
		(Math.random() + '').substring(2, 10) +
		(Math.random() + '').substring(2, 10)
	const digitString = String(cardNumber).slice(-4)
	const digitNumber = Number(digitString)

	beforeEach(() => {
		onLogin.loginJuice('test@example.com', 'poyoyo')
	})

	it('Add card', () => {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('.mat-menu-item').contains('My Payment Options').click()
		cy.get('.mat-expansion-panel-header').click()
		cy.get('#mat-input-3').type('trial')
		cy.get('[type="number"]').type(cardNumber)
		cy.get('#mat-input-5').select('5').should('have.value', '5')
		cy.get('#mat-input-6')
			.select('2080', { force: true })
			.should('have.value', '2080')
		cy.get('.mat-button-wrapper').contains('Submit').click({ force: true })
		cy.get('.mat-simple-snack-bar-content').should(
			'contain',
			'Your card ending with ' +
				digitNumber +
				' has been saved for your convenience.'
		)
	})

	it('Adding digital wallet', () => {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('.mat-menu-item').contains('Digital Wallet').click()
		cy.get('[type="number"]').type('10')
		cy.get('#submitButton').click()
		cy.get('#mat-radio-40').click()
		cy.get('.mat-button-wrapper')
			.contains('Continue')
			.click({ force: true })
		cy.get('.confirmation').should('contain', 50)
		cy.get('.mat-simple-snack-bar-content').should(
			'contain',
			'Wallet successfully charged.'
		)
	})
})
