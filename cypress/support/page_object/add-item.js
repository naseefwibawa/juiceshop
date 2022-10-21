export class addItem {
	addProduct(productName) {
		cy.get('#searchQuery').click()
		cy.get('#mat-input-0')
			.clear({ force: true })
			.type(productName)
			.type('{enter}')
		cy.get('.item-name').then(element => {
			cy.wrap(element).should('contain', productName)
			cy.get('.mat-button-wrapper').contains('Add to Basket').click()
			cy.get('.mat-simple-snack-bar-content').should(
				'contain',
				'Placed ' + productName + ' into basket.'
			)
		})
	}

	removeItem(productName) {
		cy.get('.mat-button-wrapper').contains('Your Basket').click()
		cy.get('.mat-row')
			.find('.cdk-column-product')
			.then(element => {
				if (cy.wrap(element).contains(productName)) {
					cy.get('.mat-row')
						.eq(0)
						.find('.fa-trash-alt')
						.click({ force: true })
				}
			})
	}
}

export const addItemToBasket = new addItem()
