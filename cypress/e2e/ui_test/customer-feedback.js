/// <reference types="Cypress"/>

import { onLogin } from '../../support/page_object/login-command'

describe('Customer feedback', () => {
	beforeEach(() => {
		onLogin.loginJuice('poy@example.com', 'poyoyo')
	})

	it('Add customer feedback', () => {
		cy.get('.mat-button-wrapper').contains('menu').click()
		cy.get('.mat-list-item-content').contains('Customer Feedback').click()
		cy.get('#comment').type('This is comment')
		cy.get('#rating').invoke('attr', 'aria-valuenow', '3')
		cy.get('.mat-slider-track-background').invoke('attr', 'style', '0.5')
		cy.get('.mat-slider-ticks-container').invoke('attr', 'style', '0.5')
		cy.get('.mat-slider-thumb-container').invoke('attr', 'style', '-0.5')
		cy.get('#captcha')
			.invoke('text')
			.then(parseInt)
			.should('be.gt', 0)
			.then(marks => {
				cy.get('#captchaControl').type(marks)
			})
		// cy.get('#captcha')
		// 	.invoke('prop', 'firstChild', 'data')
		// 	.then(parseInt())
	})
})
