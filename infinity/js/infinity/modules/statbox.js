var infinity = infinity || {};

infinity.statbox = function() {

	var _holder = null;

	return {

		init: function(elem) {

			$(elem).prepend('<h3>Stats</h3>');
			$(elem).append('<ul><li><span id="statbox-tracks-count">0</span> tracks loaded</li></ul>');
			_holder = elem;
		},

		updateTracksCount: function (value) {

			$("#statbox-tracks-count").html(value);
		}
	};

}();