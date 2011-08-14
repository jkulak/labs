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
				var li = '<li class="track">';
				if (null != value.art_work) {
					li += '<img src="' + value.art_work + '" />';
				} else {
					if (null != value.user.avatar_url) {
						li += '<img class="avatar" src="' + value.user.avatar_url + '" />';
					};
				};
				li += value.user.username + ' - ' + value.title;
				li += '</li>';

				$(li).appendTo(_ul).hide().delay(index * 20).fadeIn(100);
				
			});

			$.publish('timeline:append:success');
			
		}

	};

}();