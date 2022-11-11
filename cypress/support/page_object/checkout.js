export class checkoutItem {
	checkoutWallet() {
		cy.get('.mat-button-wrapper').contains('Your Basket').click()
		cy.get('#checkoutButton').click()
		cy.get('.mat-column-Address')
	}
}

export const checkout = new checkoutItem()
