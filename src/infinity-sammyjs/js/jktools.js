var jkl = jkl || {};

jkl.tools = function() {

	return {
		
		get_type: function (thing) {
			if(thing===null)return "[object Null]"; // special case
    		return Object.prototype.toString.call(thing);
		}
	}
}();