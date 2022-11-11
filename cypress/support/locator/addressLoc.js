export class addressLoc {
	static firstAddressRadio =
		'#mat-radio-40 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
	static secondAddressRadio =
		'#mat-radio-41 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
	static addNewAddressBtn = '[routerlink="/address/create"]'
	static editAddressBtn = '.cdk-column-Edit > .mat-focus-indicator'
	static editFirstAddressBtn =
		':nth-child(2) > .cdk-column-Edit > .mat-focus-indicator'
	static editSecondAddressBtn =
		':nth-child(3) > .cdk-column-Edit > .mat-focus-indicator'
	static removeAddressBtn = '.cdk-column-Remove > .mat-focus-indicator'
	static removeFirstAddressBtn =
		':nth-child(2) > .cdk-column-Remove > .mat-focus-indicator'
	static removeSecondAddressBtn =
		':nth-child(3) > .cdk-column-Remove > .mat-focus-indicator'
	static countryField = '[placeholder="Please provide a country."]'
	static nameField = '[placeholder="Please provide a name."]'
	static mobileNumberField = '[placeholder="Please provide a mobile number."]'
	static ZIPcodeField = '[placeholder="Please provide a ZIP code."]'
	static addressField = '#address'
	static cityField = '[placeholder="Please provide a city."]'
	static stateField = '[placeholder="Please provide a state."]'
	static backBtn = '.btn-return'
	static submitBtn = '#submitButton'
	static confirmationAddressAdded = '.mat-simple-snack-bar-content'
	static addressTable = '.mat-table'
	static addressRow = '.mat-row'
}

export default addressLoc
