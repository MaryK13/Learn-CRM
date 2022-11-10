var RecordaMeeting = {

	//RecordaMeeting.OpenRecord

	OpenRecord: function (primaryControl) {

		var entityFormOptions = {};

		entityFormOptions['entityName'] = 'Add the entity name';

		entityFormOptions['useQuickCreateForm'] = true;

		var formParameters = {};

		// Open the form.

		Xrm.Navigation.openForm(entityFormOptions, formParameters).then(
			function (success) {

				console.log(success);

			},

			function (error) {

				console.log(error);

			});

	}
}
