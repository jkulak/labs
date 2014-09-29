// var jkl = jkl || {};

// jkl.app = jkl.app || {};

var obj = namespace('jkl.app');

// jkl.app.core = function() {
obj.core = function() {

	var _privateData = null;

	return {

		sayHi : function() {

			console.log('oh hi! im jkapp.say_hi');
		},

		getPrivateData : function() {

			console.log(this._privateData);
		},

		setPrivateData: function(value) {

			this._privateData = value;
		}

	};

}();