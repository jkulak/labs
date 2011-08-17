var myApp = myApp || {};
myApp.collections = myApp.collections || {};

myApp.collections.Tracks = Backbone.Collection.extend({

    model: myApp.models.Track,
    url: "https://api.soundcloud.com/tracks?client_id=59570769cb4121a0582c05646324ba47&limit=200",
    parse: function(response) {

        return response;
    }
});