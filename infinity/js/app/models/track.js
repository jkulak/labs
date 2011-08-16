var Track = Backbone.Model.extend({

	defaults: {
		// title: 'default_title'
	},

	initialize: function (data) {

	},

	save: function () {

		tracks.add(this);
	},

	toRender: function () {

		return {
			title: this.get('title'),
			imageUrl: this.get('artwork_url') || this.get('user').avatar_url,
			artist: this.get('user').username
		};
	}
});