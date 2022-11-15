var SaveButton = {

	SaveElements: function () {
		var fieldName = Xrm.Page.getAttribute('fullname').getValue();
		var fieldEmail = Xrm.Page.getAttribute('emailaddress1').getValue();
		var fieldRegion = Xrm.Page.getAttribute('new_contactregion').getValue();
		var fieldCity = Xrm.Page.getAttribute('new_contactcity').getValue();
		var elements = [
			{ 'field': fieldName, 'fieldTxt': 'Полное имя' },
			{ 'field': fieldEmail, 'fieldTxt': 'Электронная почта' },
			{ 'field': fieldRegion, 'fieldTxt': 'Регион' },
			{ 'field': fieldCity, 'fieldTxt': 'Город' }
		];

		if (fieldName && fieldEmail && fieldRegion && fieldCity) {
			Xrm.Page.data.save().then(() => {
				var entity = Xrm.Page.data.entity.getEntityName();
				var entityId = Xrm.Page.data.entity.getId();
				var entityFormOptions = {
					'entityName': entity,
					'entityId': entityId
				};
				Xrm.Navigation.openForm(entityFormOptions).then(success => console.log(success), error => console.log(error));
			}, error => console.log(error));
		} else {
			var alertTxt = `Заполните обязательные поля!\n`;
			var fieldTxts = [];
			elements.map(x => {
				if (x.field === null) {
					fieldTxts.push(x.fieldTxt);
				}
			});
			alert(alertTxt.concat(fieldTxts));
		}
	},

	SaveElementsAndClose: function () {
		var fieldName = Xrm.Page.getAttribute('fullname').getValue();
		var fieldEmail = Xrm.Page.getAttribute('emailaddress1').getValue();
		var fieldRegion = Xrm.Page.getAttribute('new_contactregion').getValue();
		var fieldCity = Xrm.Page.getAttribute('new_contactcity').getValue();
		var elements = [
			{ 'field': fieldName, 'fieldTxt': 'Полное имя' },
			{ 'field': fieldEmail, 'fieldTxt': 'Электронная почта' },
			{ 'field': fieldRegion, 'fieldTxt': 'Регион' },
			{ 'field': fieldCity, 'fieldTxt': 'Город' }
		];

		if (fieldName && fieldEmail && fieldRegion && fieldCity) {
			Xrm.Page.data.save().then(() => {
				Xrm.Page.ui.close();
			}, error => console.log(error));
		} else {
			var alertTxt = `Заполните обязательные поля!\n`;
			var fieldTxts = [];
			elements.map(x => {
				if (x.field === null) {
					fieldTxts.push(x.fieldTxt);
				}
			});
			alert(alertTxt.concat(fieldTxts));
		}
	}
}
