export class loginJuiceShop {
	loginJuice(email, password) {
		cy.visit('http://localhost:3000/#/')
		cy.wait(1000)
		cy.get('.mat-button-wrapper').contains('Dismiss').click()
		cy.get('.mat-button-wrapper').contains('Account').click()
		cy.get('#navbarLoginButton').click()
		cy.get('#email').type(email)
		cy.get('#password').type(password)
		cy.get('#loginButton').click()
	}
}

export const onLogin = new loginJuiceShop()
