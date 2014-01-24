var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.List = Backbone.View.extend({

    tagName: 'ul',
    id: 'item-list',            

    initialize: function () {
        _.each(myApp.tracks, function (v, k) {
            myApp.tracks[k].bind('reset', this.addAll, this)
        }, this)
    },

    events: {

        "click li": "itemClick",
    },

    itemClick: function (event) {

        // console.log('click item!', event);
    },

    addAll: function () {

        $(this.el).html('');

        myApp.tracks = myApp.tracks || [];
        var id = this.categoryId || 0;
        if (myApp.tracks[id] == null) {
            myApp.tracks[id] = new myApp.collections.Tracks();
            myApp.tracks[id].id = id;
            myApp.tracks[id].bind('reset', this.addAll, this)
            
        };

        if (myApp.tracks[id].received - Date.now() < -10000 || myApp.tracks[id].received == null) {
            console.log('reload  ', id);
            myApp.app.notifier.loading('Reloading data');
            myApp.tracks[id].fetch();
        };

        console.log('addAll', myApp.tracks[id]);
        myApp.tracks[id].each(this.addOne, this);
    },

    addOne: function (item) {

        var view = new myApp.views.TrackLi({model: item});
        $(this.el).append(view.render().el);
    },

    render: function (categoryId) {

        this.addAll();
        return this;
    },

    remove: function () {
        $(this.el).remove();
    }

});