/// <reference types="Cypress" />

import complaintLoc from '../../support/locator/complaintLoc'
import Homepage from '../../support/locator/Homepage'
import { onLogin } from '../../support/page_object/login-command'

describe('Complain page', () => {
	before(() => {
		cy.fixture('userCredential').then(data => {
			globalThis.data = data
		})
	})

	beforeEach(() => {
		onLogin.loginJuice(globalThis.data.email, globalThis.data.password)
	})

	it('complain', () => {
		cy.get(Homepage.sideMenuBtn).should('be.visible').click()
		cy.get(Homepage.complaintNav).should('be.visible').click()
		cy.get(complaintLoc.customerEmailInfo)
			.invoke('prop', 'value')
			.should('contain', globalThis.data.email)
		cy.get(complaintLoc.complainField).type('this is complain issue')
		cy.get(complaintLoc.btnSubmitComplain).should('not.be.disabled').click()
		cy.get(complaintLoc.confirmationMessage).should(
			'contain',
			'Customer support will get in touch with you soon'
		)
	})
})
