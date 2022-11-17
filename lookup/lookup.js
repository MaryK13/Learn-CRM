function OpenLookup() {

	//код из интернета для теста
	var Sdk = window.Sdk || {};
	Sdk.setParentAccountIdFilter = function (executionContext) {
		formContext = executionContext.getFormContext();
		formContext.getControl("new_contactregion").addPreSearch(Sdk.filterCustomerAccounts);
	}

	Sdk.filterCustomerAccounts = function () {
		var customerAccountFilter = "<filter type='and'><condition attribute='new_contactregion' operator='eq' value='1'/></filter>";
		formContext.getControl("new_contactregion").addCustomFilter(customerAccountFilter, "contact");
	}

	// var requestURL = 'https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia';
	// var request = new XMLHttpRequest();
	// request.open('GET', requestURL);
	// request.responseType = 'json';
	// request.send();
	// request.onload = () => {
	// 	var regionRussia = request.response;
	// 	GetRegions(regionRussia)
	// 	// console.log('regionRussia', regionRussia);
	// }
}

// function GetRegions(regions) {
// 	var regionArray = [];
//
// 	for (var region of regions) {
// 		regionArray.push(region.region);
// 	}
//
// 	formContext = executionContext.getFormContext();
// 	formContext.getControl('new_contactregion').addPreSearch(GetCity);
//
//
//
// 	console.log('regionRussia', regionArray)
// 	// GetCity(region.region, region.city)
// }
//
// function GetCity(region, city) {
// 	console.log('city', city)
// }
