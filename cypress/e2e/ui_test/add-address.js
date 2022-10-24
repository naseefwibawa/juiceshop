/// <reference types="Cypress" />

import { onLogin } from '../../support/page_object/login-command'

describe('Add address', () => {
	beforeEach(() => {
		onLogin.loginJuice('poy@example.com', 'poyoyo')
	})

	it.only('add address', () => {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('.mat-menu-item').contains('My saved addresses').click()
		cy.get('.mat-button-wrapper').contains('Add New Address').click()
		cy.get('[placeholder="Please provide a country."]').type('US')
		cy.get('[placeholder="Please provide a name."]').type('poyoyo')
		cy.get('[placeholder="Please provide a mobile number."]').type(
			'555888000'
		)
		cy.get('[placeholder="Please provide a ZIP code."]').type('55574')
		cy.get('#address').type('demangan baru')
		cy.get('[placeholder="Please provide a city."]').type('manchester')
		cy.get('[placeholder="Please provide a state."]').type('irelandish')
		cy.get('.mat-button-wrapper').contains('Submit').click()
		cy.get('.mat-simple-snack-bar-content').should(
			'contain',
			'The address at manchester has been successfully added to your addresses.'
		)
	})

	it('update address', () => {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('.mat-menu-item').contains('My saved addresses').click()
		cy.get('.mat-button-wrapper').find('.fa-edit').eq(0).click()
		cy.get('[placeholder="Please provide a city."]')
			.clear()
			.type('argentina')
		cy.get('.mat-button-wrapper').contains('Submit').click()
		cy.get('.mat-simple-snack-bar-content').should(
			'contain',
			'The address at argentina has been successfully updated.'
		)
	})

	it('remove the addess', () => {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('.mat-menu-item').contains('My saved addresses').click()
		cy.get('.mat-button-wrapper').find('.fa-trash-alt').eq(0).click()
		cy.get('.mat-simple-snack-bar-content').should(
			'contain',
			'Your address has been removed.'
		)
	})
})
