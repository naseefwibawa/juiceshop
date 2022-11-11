export class OrderPaymentPage {
	static orderAndPaymentNav =
		'.mat-menu-content > [aria-label="Show Orders and Payment Menu"]'
	static orderHistoryNav = '[routerlink="/order-history"]'
	static recycleNav = '[routerlink="/recycle"]'
	static savedAddressNav = '[routerlink="/address/saved"]'
	static paymentNav = '[routerlink="/saved-payment-methods"]'
	static digitalPaymentNav = '[routerlink="/wallet"]'
	static quantityField = '#mat-input-2'
	static recycleBtn = '#recycleButton'
	static trackOrder = '[aria-label="Track Your Order"]'
	static writeReviewBtn = '.cdk-column-review > .mat-focus-indicator'
	static orderID = '[fxflex="40%"] > :nth-child(2)'
	static codeID = 'code'
	static counterDelivery = '.fa-layers-counter'
	static reviewPanelBtn = '#mat-expansion-panel-header-0'
	static reviewThumbBtn = '[aria-label="Rate a helpful review"]'
	static inputReviewField = '#mat-input-3'
	static closeReviewBtn = '.close-dialog'
	static submitReviewBtn = '#submitButton'
}

export default OrderPaymentPage
