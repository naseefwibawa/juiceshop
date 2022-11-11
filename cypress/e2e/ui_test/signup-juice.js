import AccountPage from '../../support/locator/AccountPage'
import cartLoc from '../../support/locator/cartLoc'
import Homepage from '../../support/locator/Homepage'

/// <reference types="Cypress"/>

describe('Sign up to Juice shop', () => {
	let randomString = Math.random().toString(36).substring(3)
	let email = 'test_' + randomString + '@example.com'
	let password = 'poyoyo'
	let securityQuestion = " Maternal grandmother's first name? "
	let securityAnswer = 'harisada'

	describe('UI test', () => {
		beforeEach('Visit the web', () => {
			cy.visit('http://localhost:3000/#/')
			cy.wait(1000)
			cy.get(Homepage.dismissBtn).click()
			cy.get(Homepage.cookieDismissBtn).click()
			cy.get(AccountPage.AccNav).should('be.visible').click()
			cy.get(AccountPage.LoginNav).should('be.visible').click()
		})

		it('Valid sign up into juice shop', () => {
			cy.get(AccountPage.notYetCustomerBtn).should('be.visible').click()
			cy.get(AccountPage.emailReg).type(email)
			cy.get(AccountPage.passwordReg).type(password)
			cy.get(AccountPage.repeatPasswordReg).type(password)
			cy.get(AccountPage.securityQuestion).click()
			cy.get(AccountPage.listSecQuestion)
				.contains(securityQuestion)
				.click()
			cy.get(AccountPage.securityAnswerReg).type(securityAnswer)
			cy.get(AccountPage.registerBtn).click()
			cy.get(AccountPage.confirmationMessage).should(
				'contain',
				'Registration completed successfully. You can now log in.'
			)
		})

		it('valid login after sign up', () => {
			cy.get(AccountPage.emailField).type(email)
			cy.get(AccountPage.passwordField).type(password)
			cy.get(AccountPage.checkboxRememberMe).check({ force: true })
			cy.get(AccountPage.loginBtn).click()
			cy.get(cartLoc.cartNav).should('be.visible')
		})

		it('error message should appear if login not valid', () => {
			cy.get(AccountPage.emailField).type(email)
			cy.get(AccountPage.passwordField).type('password')
			cy.get(AccountPage.loginBtn).click()
			cy.get(AccountPage.errorMessage).should('be.visible')
		})
	})

	describe('API Test', () => {
		const userCredential = {
			email: email,
			password: password,
		}

		it('Login API', () => {
			cy.request(
				'POST',
				'http://localhost:3000/rest/user/login',
				userCredential
			).then(response => {
				expect(response.status).to.equal(200)
				expect(response.body).to.have.property('authentication')
				expect(response.body.authentication).to.have.property('token')
			})
		})

		it('Login via token', () => {
			cy.request(
				'POST',
				'http://localhost:3000/rest/user/login',
				userCredential
			)
				.its('body')
				.then(body => {
					const token = body.authentication.token
					cy.wrap(token).as('userToken')

					const userToken = cy.get('@userToken')

					cy.visit('http://localhost:3000/', {
						onBeforeLoad(browser) {
							browser.localStorage.setItem('token', userToken)
						},
					})
					cy.wait(2000)
					cy.get(Homepage.dismissBtn).click()
					cy.get(cartLoc.cartNav).should('be.visible')
				})
		})
	})
})
