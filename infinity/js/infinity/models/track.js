var Track = Backbone.Model.extend({
	initialize: function () {
		console.log('initializing Track');	
	},
	save: function () {
		tasks.add(this);
	}
});

































// SPINE
// var TrackStore = [];

// var Track = Spine.Model.setup("Track", ["artist", "title", "id"]);

// Track.extend({
// 	importAll: function (data) {

// 		$.each(data, function(value, key){
// 			console.log(key.user.username + ' - ' + key.title);
// 			var track = Track.init({title: key.title, artist: key.user, yo: 'yoooo'});
// 			console.log('track', track);
// 			track.save();
// 		});
// 	}
// });

// Track.include({
//   getAll: function(){
//     return(this.artist.username + " - " + this.title);
//   } 
// });