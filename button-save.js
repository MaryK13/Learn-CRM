var fieldName = Xrm.Page.getAttribute('fullname').getValue();
var fieldEmail = Xrm.Page.getAttribute('emailaddress1').getValue();
var fieldRegion = Xrm.Page.getAttribute('new_contactregion').getValue();
var fieldCity = Xrm.Page.getAttribute('new_contactcity').getValue();
var SaveButton = {

	SaveElements: function () {
		if (fieldName && fieldEmail && fieldRegion && fieldCity) {
			// var btn = Xrm.Page.getEventArgs().getSaveMode();
			// console.log(btn)

			Xrm.Page.data.refresh(true).then(() => {
				return Xrm.Page.data.save();
			}, error => {
				console.log(error)
			})

			// Xrm.Page.data.save();
			console.log(fieldName, fieldEmail, fieldRegion, fieldCity);
		} else {
			alert('Заполните обязательные поля!')
		}
	},

	SaveElementsAndClose: function () {
		if (fieldName && fieldEmail && fieldRegion && fieldCity) {
			Xrm.Page.data.save();

			console.log(fieldName, fieldEmail, fieldRegion, fieldCity);
		} else {
			alert('Заполните обязательные поля!')
		}
	}
}
