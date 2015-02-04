 var AppView = Backbone.View.extend({
 	el: '#app-view',
	initialize: function(){

		_.bindAll(
			this,
			'onAddButtonClick'
		);

		this.$descriptionBox = $('#description');
		this.$addButton = $('#add-button');

		this.$addButton.on('click',this.onAddButtonClick);
	},
	onAddButtonClick: function() {
		$('#list').append("<br>" + this.$descriptionBox.val());
		$('<input type="checkbox" value="1" />').appendTo('#list');
	}
	// onCheckBoxClick: function() {
	// 	$('input:checkbox').on('change', function () {
 //        var input = $(this).next('#list');
 //        if (this.checked) {
 //            $(input).css('textDecoration', 'line-through');
 //        } else {
 //            $(input).css('textDecoration', 'none');
 //        }
 //    })
	// }

});


