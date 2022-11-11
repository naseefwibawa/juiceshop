export class paymentLoc {
	static paymentNav = '[routerlink="/saved-payment-methods"]'
	static digitalPaymentNav = '[routerlink="/wallet"]'
	static removeCardBtn = '.cdk-column-Remove > .mat-focus-indicator'
	static removeFirstCardBtn =
		':nth-child(2) > .cdk-column-Remove > .mat-focus-indicator'
	static removeSecondCardBtn =
		':nth-child(3) > .cdk-column-Remove > .mat-focus-indicator'
	static addNewCard = '#mat-expansion-panel-header-0'
	static nameField = '#mat-input-3'
	static cardNumberField = '#mat-input-4'
	static expiredMonthField = '#mat-input-5'
	static expiredYearField = '#mat-input-6'
	static submitCardBtn = '#submitButton'
	static amountField = '#mat-input-3'
	static continueWalletBtn = '#submitButton'
	static backWalletBtn = '.btn-return'
	static cardRadio = '.mat-radio-outer-circle'
	static submitWalletBtn = '.nextButton'
	static confirmationCardAdded = '.mat-simple-snack-bar-content'
	static cardTable = '.mat-table'
	static cardRow = '.mat-row'
	static walletBallance = '.confirmation'
}

export default paymentLoc
