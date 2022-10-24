/// <reference types="Cypress" />

import { onLogin } from '../../support/page_object/login-command'

describe('Complain page', () => {
	beforeEach(() => {
		onLogin.loginJuice('poy@example.com', 'poyoyo')
	})

	it('complain', () => {
		cy.get('.mat-button-wrapper').contains('menu').click()
		cy.get('.mat-list-item-content').contains('Complaint').click()
		cy.get('[type="text"]')
			.eq(1)
			.invoke('prop', 'value')
			.should('contain', 'poy@example.com')
		cy.get('#complaintMessage').type('this is complain issue')
		cy.get('.mat-button-wrapper').contains('Submit').click()
		cy.get('.confirmation').should(
			'contain',
			'Customer support will get in touch with you soon'
		)
	})
})
