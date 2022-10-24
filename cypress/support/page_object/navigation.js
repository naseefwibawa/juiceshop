import Homepage from '../locator/Homepage'
import AccountPage from '../locator/AccountPage'
import Profile from '../locator/Profile'
import cartLoc from '../locator/cartLoc'
import OrderAndPayment from '../locator/OrderAndPayment'
import PrivacySec from '../locator/PrivacySec'
import paymentLoc from '../locator/paymentLoc'
import addressLoc from '../locator/addressLoc'

function displayItem(set) {
	const display1 = 12
	const display2 = 24
	const display3 = 36

	if (set > 0 && set <= 12) {
		cy.get(Homepage.displayItem12).click({ force: true })
		cy.get(Homepage.displayItem).should('contain', display1)
	} else if (set > 12 && set <= 24) {
		cy.get(Homepage.displayItem24).click({ force: true })
		cy.get(Homepage.displayItem).should('contain', display2)
	} else if (set > 24 && set <= 36) {
		cy.get(Homepage.displayItem36).click({ force: true })
		cy.get(Homepage.displayItem).should('contain', display3)
	} else {
		return false
	}
}

export class navigationPage {
	visitPage() {
		cy.visit('/')
		cy.wait(1000)
		cy.get(Homepage.dismissBtn).should('contain', 'Dismiss').click()
		cy.get(Homepage.cookieDismissBtn).click()
	}

	loginPage() {
		cy.get(AccountPage.AccNav).should('contain', 'Account').click()
		cy.get(AccountPage.LoginNav).click()
		cy.url().should('contain', '/login')
	}

	customerFeedbackPage() {
		cy.get(Homepage.sideMenuBtn).contains('menu').click()
		cy.get(Homepage.customerFeedbackNav)
			.should('contain', 'Customer Feedback')
			.click()
		cy.url().should('contain', '/contact')
	}

	aboutPage() {
		cy.get(Homepage.sideMenuBtn).contains('menu').click()
		cy.get(Homepage.aboutUsNav).should('contain', 'About Us').click()
		cy.url().should('contain', '/about')
	}

	photoWallPage() {
		cy.get(Homepage.sideMenuBtn).contains('menu').click()
		cy.get(Homepage.photoWallNav).should('contain', 'Photo Wall').click()
		cy.url().should('contain', '/photo-wall')
	}

	registerNewAccount() {
		cy.get(AccountPage.AccNav).should('contain', 'Account').click()
		cy.url().should('contain', '/login')
		cy.get(AccountPage.notYetCustomerBtn).click()
		cy.url().should('contain', '/register')
	}

	forgotPasswordPage() {
		cy.get(AccountPage.AccNav).should('contain', 'Account').click()
		cy.get(AccountPage.forgotPassword)
			.should('contain', 'Forgot your password?')
			.click()
		cy.url().should('contain', '/forgot-password')
	}

	profilePage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(Profile.profileNav).click()
		cy.url().should('contain', '/profile')
	}

	cartPage() {
		cy.get(cartLoc.cartNav).should('contain', 'Your Basket').click()
		cy.url().should('contain', '/basket')
	}

	orderHistoryPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(OrderAndPayment.orderAndPaymentNav)
			.should('contain', 'Orders & Payment')
			.click()
		cy.get(OrderAndPayment.orderHistoryNav)
			.should('contain', 'Order History')
			.click()
		cy.url().should('contain', '/order-history')
	}

	recyclePage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(OrderAndPayment.orderAndPaymentNav)
			.should('contain', 'Orders & Payment')
			.click()
		cy.get(OrderAndPayment.recycleNav).should('contain', 'Recycle').click()
		cy.url().should('contain', '/recycle')
	}

	addressPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(OrderAndPayment.orderAndPaymentNav)
			.should('contain', 'Orders & Payment')
			.click()
		cy.get(OrderAndPayment.savedAddressNav)
			.should('contain', 'My saved addresses')
			.click()
		cy.url().should('contain', '/address/saved')
	}

	addNewAddressPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(OrderAndPayment.orderAndPaymentNav)
			.should('contain', 'Orders & Payment')
			.click()
		cy.get(OrderAndPayment.savedAddressNav).click()
		cy.url().should('contain', '/address/saved')
		cy.get(addressLoc.addNewAddressBtn).click()
		cy.url().should('contain', '/address/create')
	}

	myPaymentPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(OrderAndPayment.orderAndPaymentNav)
			.should('contain', 'Orders & Payment')
			.click()
		cy.get(OrderAndPayment.paymentNav)
			.should('contain', 'My Payment Options')
			.click()
		cy.url().should('contain', '/saved-payment-methods')
	}

	digitalWalletPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(OrderAndPayment.orderAndPaymentNav)
			.should('contain', 'Orders & Payment')
			.click()
		cy.get(OrderAndPayment.digitalPaymentNav)
			.should('contain', 'Digital Wallet')
			.click()
		cy.url().should('contain', '/wallet')
	}

	privacyPolicyPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(PrivacySec.primarySecNav)
			.should('contain', 'Privacy & Security')
			.click()
		cy.get(PrivacySec.privacyPolicyNav)
			.should('contain', 'Privacy Policy')
			.click()
		cy.url().should('contain', '/privacy-security/privacy-policy')
	}

	exportDataPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(PrivacySec.primarySecNav)
			.should('contain', 'Privacy & Security')
			.click()
		cy.get(PrivacySec.dataExportNav)
			.should('contain', 'Request Data Export')
			.click()
		cy.url().should('contain', '/privacy-security/data-export')
	}

	erasureDataPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(PrivacySec.primarySecNav)
			.should('contain', 'Privacy & Security')
			.click()
		cy.get(PrivacySec.dataEraseNav)
			.should('contain', 'Request Data Erasure')
			.click()
		cy.url().should('contain', '/dataerasure')
	}

	changePasswordPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(PrivacySec.primarySecNav)
			.should('contain', 'Privacy & Security')
			.click()
		cy.get(PrivacySec.changePasswordNav)
			.should('contain', 'Change Password')
			.click()
		cy.url().should('contain', '/privacy-security/change-password')
	}

	twoFAConfigurationPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(PrivacySec.primarySecNav)
			.should('contain', 'Privacy & Security')
			.click()
		cy.get(PrivacySec.twoFAconfigNav)
			.should('contain', '2FA Configuration')
			.click()
		cy.url().should(
			'contain',
			'/privacy-security/two-factor-authentication'
		)
	}

	lastLoginIPPage() {
		cy.get(AccountPage.AccNav).click()
		cy.get(PrivacySec.primarySecNav)
			.should('contain', 'Privacy & Security')
			.click()
		cy.get(PrivacySec.lastLoginIPNav)
			.should('contain', 'Last Login IP')
			.click()
		cy.url().should('contain', '/privacy-security/last-login-ip')
	}

	displayItemPage(set) {
		cy.get(Homepage.displayItem).then(input => {
			cy.wrap(input).click({ force: true })
			let display = displayItem(set)
		})
	}
}

export const navigateTo = new navigationPage()
