function OpenLookup() {
	filterCustomerAccounts = function () {
		var idRegion = Xrm.Page.getAttribute('new_contactregion').getValue()[0].id;
		idRegion = idRegion.substring(1, idRegion.length - 1);
		var customerAccountFilter = `<filter type='and'><condition attribute='new_regionid' operator='eq' value='${idRegion}'/></filter>`;
		Xrm.Page.getControl("new_contactcity").addCustomFilter(customerAccountFilter);
	}
	Xrm.Page.getControl("new_contactcity").addPreSearch(filterCustomerAccounts);
}
