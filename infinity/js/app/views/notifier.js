var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.Notifier = Backbone.View.extend({

    initialize: function (elem) {

        $(elem).append(this.render().el);
        console.log('initialize: ' , this.render().el);
    },

    notify: function (notice) {

        // $(this.el).html(this.template({notice: notice})).animate({'top': '+=33'}, 1500);
        //.animate({'top': '-=66px'}, 1500);
        console.log('notify: ' + notice);
        $(this.el).html(this.template({notice: notice})).fadeIn('slow');
    },

    show: function (notice) {

        $(this.el).html(this.template({notice: notice})).animate({'top': '+=33px'}, 500);
    },

    hide: function () {

        $(this.el).animate({'top': '-=66px'}, 1500);
    },

    tagName: 'div',
    id: 'notifier',

    template: _.template('<img src="images/roll.gif" /><span><%= notice %></span>'),

    render: function (notice) {

        $(this.el).html(this.template({notice: notice}));
        return this;
    }
});