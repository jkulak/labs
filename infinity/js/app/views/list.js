var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.List = Backbone.View.extend({

    tagName: 'ul',
    id: 'item-list',            

    initialize: function () {

        this.collection.bind('reset', this.addAll, this);
    },

    events: {

        "click li": "itemClick",
    },

    itemClick: function (event) {

        // console.log('click item!', event);
    },

    addAll: function () {

        $(this.el).html('');
        this.collection.each(this.addOne, this);
    },

    addOne: function (item) {

        var view = new myApp.views.TrackLi({model: item});
        $(this.el).append(view.render().el);
    },

    render: function () {

        // add all before render
        this.addAll();
        return this;
    },

    remove: function () {
        $(this.el).remove();
    }

});