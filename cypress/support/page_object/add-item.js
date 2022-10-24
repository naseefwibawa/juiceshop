import Homepage from '../locator/Homepage'
import cartLoc from '../locator/cartLoc'

export class addItem {
	addProduct(productName) {
		cy.get(Homepage.searchBtn).click({ force: true })
		cy.get(Homepage.inputSearchField)
			.clear({ force: true })
			.type(productName)
			.type('{enter}')
		cy.get(cartLoc.itemName).then(element => {
			cy.wrap(element).should('contain', productName)
			cy.get(cartLoc.addItemToCart)
				.should('contain', 'Add to Basket')
				.click({ force: true })
			cy.get(cartLoc.confirmationItemAdded).should(
				'contain',
				'Placed ' + productName + ' into basket.'
			)
		})
	}

	removeItem(productName) {
		cy.get(cartLoc.cartNav).should('contain', 'Your Basket').click()
		cy.get(cartLoc.productTable)
			.contains(cartLoc.productRow, productName)
			.then(element => {
				cy.wrap(element)
					.find(cartLoc.removeItemBtn)
					.click({ force: true })
			})
	}
}

export const addItemToBasket = new addItem()
