var myApp = myApp || {};
myApp.models = myApp.models || {};

myApp.models.Track = Backbone.Model.extend({

    defaults: {
        // title: 'default_title'
    },

    initialize: function (data) {

    },

    save: function () {

        tracks.add(this);
    },

    toListView: function () {

        return {
            title: this.get('title'),
            imageUrl: this.get('artwork_url') || this.get('user').avatar_url,
            artist: this.get('user').username,
            url: '#!/track/id-' + this.get('id')
        };
    },

    toView: function () {

        return {
            title: this.get('title'),
            imageUrl: this.get('artwork_url') || this.get('user').avatar_url,
            artist: this.get('user').username,
            url: '#!/track/id-' + this.get('id')
        };
    }
});