var infinity = infinity || {};

infinity.timeline = function() {

	var _holder = null;
	var _ul = null;

	return {

		init: function(elem) {

			$(elem).prepend('<h2>The list</h2>');
			$(elem).append('<ul></ul>');
			_holder = elem;
			_ul = _holder + ' ul';
		},

		// preload list with new data
		preload: function(data) {

			this.clearList();
			this.append(data);
		},

		// clears entries
		clearList: function () {
			console.log('Clearing list');
			$(_ul).html('');
		},

		// add data to a list
		append: function(data) {

			$.each(data, function(index, value) {
				
				if (null != value.art_work) {
					image_src = value.art_work;
				} else {
					if (null != value.user.avatar_url) {
						image_src = value.user.avatar_url;
					};
				};

				var view = {
					image_src: image_src,
					track_artist_name: value.user.username,
					track_title: value.title
				};

				var li = Mustache.to_html(infinity.partials.timeline.item, view);
				$(li).appendTo(_ul).hide().delay(index * 20).fadeIn(100);
				
			});

			$.publish('timeline:append:success');
			
		}

	};

}();