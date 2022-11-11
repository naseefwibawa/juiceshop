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
			cy.get('.mat-button-wrapper').contains('Dismiss').click()
			cy.get('.mat-button-wrapper').contains('Account').click()
			cy.get('#navbarLoginButton').click()
		})

		it('Valid sign up into juice shop', () => {
			cy.get('#newCustomerLink').click()
			cy.get('#emailControl').type(email)
			cy.get('#passwordControl').type(password)
			cy.get('#repeatPasswordControl').type(password)
			cy.get('[name="securityQuestion"]').click()
			cy.get('[role="listbox"]').contains(securityQuestion).click()
			cy.get('#securityAnswerControl').type(securityAnswer)
			cy.get('#registerButton').click()
			cy.get('.mat-simple-snack-bar-content').should(
				'contain',
				'Registration completed successfully. You can now log in.'
			)
		})

		it('valid login after sign up', () => {
			cy.get('#email').type(email)
			cy.get('#password').type(password)
			cy.get('[type="checkbox"]').check({ force: true })
			cy.get('#loginButton').click()
			cy.get('.mat-button-wrapper').contains('Account').click()
			cy.get('.mat-menu-content')
				.find('button')
				.eq(0)
				.should('contain', email)
		})

		it('error message should appear if login not valid', () => {
			cy.get('#email').type(email)
			cy.get('#password').type('password')
			cy.get('#loginButton').click()
			cy.get('.error').should('contain', 'Invalid email or password.')
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
					cy.get('.mat-button-wrapper').contains('Dismiss').click()
					cy.get('.fa-layers-counter').should('contain', 0)
				})
		})
	})
})
