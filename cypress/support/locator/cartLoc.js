export class cartLoc {
	static cartNav = '.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted'
	static minusItemBtn = '.cdk-column-quantity > :nth-child(1)'
	static plusItemBtn = '.cdk-column-quantity > :nth-child(3)'
	static removeItemBtn = '.cdk-column-remove > .mat-focus-indicator'
	static checkoutBtn = '#checkoutButton'
	static hintBonus = '.hint'
	static totalPrice = '#price'
	static nextBtn = '.btn-next'
	static oneDayDelivery =
		'#mat-radio-42 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
	static oneDayDeliveryPrice = ':nth-child(2) > .cdk-column-Price'
	static oneDayDeliveryETA = ':nth-child(2) > .cdk-column-ETA'
	static fastDelivery =
		'#mat-radio-43 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
	static fastDeliveryPrice = ':nth-child(3) > .cdk-column-Price'
	static fastDeliveryETA = ':nth-child(3) > .cdk-column-ETA'
	static standardDelivery =
		'#mat-radio-44 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
	static standardDeliveryPrice = ':nth-child(4) > .cdk-column-Price'
	static standardDeliveryETA = ':nth-child(4) > .cdk-column-ETA'
	static backBtn = '.btn-return'
	static continueBtn = '.nextButton'
	static continue2ndBtn = '.nextButton'
	static addCouponBtn = '#mat-expansion-panel-header-2'
	static walletPayBtn = '[fxflex="20%"] > .mat-focus-indicator'
	static select1stCardPay =
		'#mat-radio-45 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
	static select2ndCardPay =
		'#mat-radio-46 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
	static otherPaymentMethod = '#mat-expansion-panel-header-3'
	static finalCheckoutBtn = '#checkoutButton'
	static bonusPoint = '.bonus-points'
	static confirmationMessage = '.confirmation'
	static confirmationDeliveryMessage = '.ng-star-inserted > .confirmation'
	static addItemToCart = '[aria-label="Add to Basket"]'
	static itemName = '.item-name'
	static confirmationItemAdded = '.mat-simple-snack-bar-content'
	static productItemNameAdded = '.mat-row > .cdk-column-product'
	static productTable = '.mat-table'
	static productRow = '.mat-row'
}

export default cartLoc
