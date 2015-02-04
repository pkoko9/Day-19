ar AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		console.log('Initialize AppView');

		// _.bindAll(
		// 	this,
		// 	'onButtonClick'
		// );

		var newPerson = new PersonModel();

		console.log(newPerson.get('age'));

		newPerson.set ({
			firstName: 'Aaron'
			latName: 'Larner'

		});

		console.log(newPerson);

	}
});