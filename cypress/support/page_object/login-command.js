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
		cy.get(AccountPage.email).type(email)
		cy.get(AccountPage.password).type(password)
		cy.get(AccountPage.loginBtn).click()
		cy.get(cartLoc.cartNav).should('contain', 'Your Basket')
	}
}

export const onLogin = new loginJuiceShop()
