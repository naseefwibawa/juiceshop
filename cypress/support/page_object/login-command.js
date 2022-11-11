import Homepage from '../locator/Homepage'
import AccountPage from '../locator/AccountPage'
import Profile from '../locator/Profile'
import cartLoc from '../locator/cartLoc'

export class loginJuiceShop {
	loginJuice(email, password) {
		cy.visit('/')
		cy.wait(1000)
		cy.get(Homepage.dismissBtn).should('contain', 'Dismiss').click()
		cy.get(Homepage.cookieDismissBtn).click()
		cy.get(AccountPage.AccNav).should('contain', 'Account').click()
		cy.get(AccountPage.LoginNav).click()
		cy.get(AccountPage.emailField).type(email)
		cy.get(AccountPage.passwordField).type(password)
		cy.get(AccountPage.loginBtn).click()
		cy.get(cartLoc.cartNav).should('be.visible')
	}
}

export const onLogin = new loginJuiceShop()
