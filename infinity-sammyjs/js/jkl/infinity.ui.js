var ns = 'jkl.infinity';
var module = namespace(ns);

module.ui = function() {

	return {

		init: function() {

			$("#aside").css('right', ($(document).width() - 810)/2);
			$("#aside").css('height', $(window).height() - 20);
		}

	};

}();