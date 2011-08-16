var Tracks = Backbone.Collection.extend({
    model: Track,
    url: "https://api.soundcloud.com/tracks?client_id=59570769cb4121a0582c05646324ba47&limit=20",
    parse: function(response) {

        return response;
    }
});