var myApp = myApp || {};
myApp.collections = myApp.collections || {};

myApp.collections.Tracks = Backbone.Collection.extend({

    model: myApp.models.Track,
    url: function () {
        return this.urlWithFormat();
    },
    parse: function(response) {
        this.received = Date.now();
        return response;
    },

    baseUrl: "https://api.soundcloud.com/tracks?client_id=59570769cb4121a0582c05646324ba47&limit=",

    urlWithFormat: function () {
      return this.baseUrl + this.id + "&offset=" + this.id;
    }
});