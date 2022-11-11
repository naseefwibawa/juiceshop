/// <reference types="Cypress"/>

import { onLogin } from '../../support/page_object/login-command'
import { paymentLoc } from '../../support/locator/paymentLoc'
import { navigateTo } from '../../support/page_object/navigation'

describe('Add debit or credit card', () => {
	let cardNumber =
		(Math.random() + '').substring(2, 10) +
		(Math.random() + '').substring(2, 10)
	const digitString = String(cardNumber).slice(-4)
	const digitNumber = Number(digitString)

	beforeEach(() => {
		onLogin.loginJuice('poy@example.com', 'poyoyo')
	})

	it('Add card', () => {
		navigateTo.myPaymentPage()
		cy.get(paymentLoc.addNewCard).click()
		cy.get(paymentLoc.nameField).type('trial')
		cy.get(paymentLoc.cardNumberField).type(cardNumber)
		cy.get(paymentLoc.expiredMonthField)
			.select('5')
			.should('have.value', '5')
		cy.get(paymentLoc.expiredYearField)
			.select('2080', { force: true })
			.should('have.value', '2080')
		cy.get(paymentLoc.submitCardBtn)
			.contains('Submit')
			.click({ force: true })
		cy.get(paymentLoc.confirmationCardAdded).should(
			'contain',
			'Your card ending with ' +
				digitNumber +
				' has been saved for your convenience.'
		)
	})

	it('Adding digital wallet', () => {
		let amount = 10
		let x
		let totalAmount = amount + x

		navigateTo.digitalWalletPage()
		cy.get(paymentLoc.walletBallance).then(wallet => {
			cy.wrap(wallet.text())
			x = Number(wallet.text())
			cy.log(x)
		})
		cy.get(paymentLoc.amountField).type(amount)
		cy.get(paymentLoc.continueWalletBtn).click()
		cy.get(paymentLoc.cardTable)
			.contains(paymentLoc.cardRow, digitNumber)
			.then(element => {
				cy.wrap(element)
					.find(paymentLoc.cardRadio)
					.click({ force: true })
			})
		cy.get(paymentLoc.submitWalletBtn).click({ force: true })
		cy.wait(1000)
		cy.get(paymentLoc.walletBallance).then(value => {
			let totals = Number(value.text())
			cy.log(totalAmount)
			cy.log(totals)
			// expect(totals).to.eql(totalAmount)
		})
		cy.get(paymentLoc.confirmationCardAdded).should(
			'contain',
			'Wallet successfully charged.'
		)
	})
})
