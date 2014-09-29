var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.Notifier = Backbone.View.extend({

    initialize: function (elem) {

        $(elem).append(this.render().el);
    },

    notify: function (notice, loader) {

        console.log('notifier.notify()', notice);
        this.show(notice, loader);
        setTimeout(this.hide.bind(this), 1000);
    },

    loading: function (notice) {

        this.notify(notice, true);
    },

    show: function (notice, loading) {

        $(this.render(notice, loading).el).animate({top: 0}, 500);
    },

    hide: function () {
        $(this.el).animate({top: -33}, 600);
    },

    tagName: 'div',

    id: 'notifier',

    template: _.template('<% if (loading) { %> <img src="images/roll.gif" /><% } %><span><%= notice %></span>'),

    render: function (notice, loading) {

        if (null === loading) {
            loading = true;
        };

        $(this.el).html(this.template({notice: notice, loading: loading}));
        return this;
    }
});