function displayItem(set) {
	const display1 = 12
	const display2 = 24
	const display3 = 36

	if (set > 0 && set <= 12) {
		cy.get('#mat-option-3').click({ force: true })
		cy.get('.mat-select-min-line').should('contain', display1)
	} else if (set > 12 && set <= 24) {
		cy.get('#mat-option-4').click({ force: true })
		cy.get('.mat-select-min-line').should('contain', display2)
	} else if (set > 24 && set <= 36) {
		cy.get('#mat-option-5').click({ force: true })
		cy.get('.mat-select-min-line').should('contain', display3)
	} else {
		return false
	}
}

export class navigationPage {
	visitPage() {
		cy.visit('/')
		cy.wait(1000)
		cy.get('.mat-button-wrapper').contains('Dismiss').click()
		cy.get('.cc-compliance').click()
	}

	loginPage() {
		cy.get('#navbarAccount').contains('Account').click()
		cy.get('#navbarLoginButton').click()
		cy.url().should('contain', '/login')
	}

	customerFeedbackPage() {
		cy.get('.mat-button-wrapper').contains('menu').click()
		cy.get('.mat-list-item-content').contains('Customer Feedback').click()
		cy.url().should('contain', '/contact')
	}

	aboutPage() {
		cy.get('.mat-button-wrapper').contains('menu').click()
		cy.get('.mat-list-item-content').contains('About Us').click()
		cy.url().should('contain', '/about')
	}

	photoWallPage() {
		cy.get('.mat-button-wrapper').contains('menu').click()
		cy.get('.mat-list-item-content').contains('Photo Wall').click()
		cy.url().should('contain', '/photo-wall')
	}

	registerNewAccount() {
		cy.get('.mat-button-wrapper').contains('Account').click()
		cy.url().should('contain', '/login')
		cy.get('#newCustomerLink').click()
		cy.url().should('contain', '/register')
	}

	forgotPasswordPage() {
		cy.get('.mat-button-wrapper').contains('Account').click()
		cy.get('.forgot-pw').click()
		cy.url().should('contain', '/forgot-password')
	}

	profilePage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-content > [aria-label="Go to user profile"]').click()
		cy.url().should('contain', '/profile')
	}

	cartPage() {
		cy.get('.mat-button-wrapper').contains('Your Basket').click()
		cy.url().should('contain', '/basket')
	}

	orderHistoryPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('[routerlink="/order-history"]').click()
		cy.url().should('contain', '/order-history')
	}

	recyclePage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('[routerlink="/recycle"]').click()
		cy.url().should('contain', '/recycle')
	}

	addressPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('[routerlink="/address/saved"]').click()
		cy.url().should('contain', '/address/saved')
	}

	addNewAddressPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('[routerlink="/address/saved"]').click()
		cy.url().should('contain', '/address/saved')
		cy.get('[routerlink="/address/create"]').click()
		cy.url().should('contain', '/address/create')
	}

	myPaymentPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('[routerlink="/saved-payment-methods"]').click()
		cy.url().should('contain', '/saved-payment-methods')
	}

	digitalWalletPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Orders & Payment').click()
		cy.get('[routerlink="/wallet"]').click()
		cy.url().should('contain', '/wallet')
	}

	privacyPolicyPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Privacy & Security').click()
		cy.get('[aria-label="Go to privacy policy page"]').click()
		cy.url().should('contain', '/privacy-security/privacy-policy')
	}

	exportDataPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Privacy & Security').click()
		cy.get('[aria-label="Go to data export page"]').click()
		cy.url().should('contain', '/privacy-security/data-export')
	}

	erasureDataPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Privacy & Security').click()
		cy.get('[aria-label="Go to data subject page"]').click()
		cy.url().should('contain', '/dataerasure')
	}

	changePasswordPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Privacy & Security').click()
		cy.get('[aria-label="Go to change password page"]').click()
		cy.url().should('contain', '/privacy-security/change-password')
	}

	twoFAConfigurationPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Privacy & Security').click()
		cy.get('[aria-label="Go to two factor authentication page"]').click()
		cy.url().should(
			'contain',
			'/privacy-security/two-factor-authentication'
		)
	}

	lastLoginIPPage() {
		cy.get('#navbarAccount').click()
		cy.get('.mat-menu-trigger').contains('Privacy & Security').click()
		cy.get('[aria-label="Go to last login ip page"]').click()
		cy.url().should('contain', '/privacy-security/last-login-ip')
	}

	displayItemPage(set) {
		cy.get('#mat-select-value-3').then(input => {
			cy.wrap(input).click({ force: true })
			let display = displayItem(set)
		})
	}
}

export const navigateTo = new navigationPage()
