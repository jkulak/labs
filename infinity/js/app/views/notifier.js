var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.Notifier = Backbone.View.extend({

    initialize: function (elem) {

        $(elem).append(this.render().el);
    },

    notify: function (notice) {

        $(this.el).html('DUPADUPA').fadeIn('slow').fadeOut('slow');
    },
     
    tagName: 'div',
    id: 'notifier',

    template: _.template('<%= notice %>'),

    render: function (notice) {

        $(this.el).html(this.template({notice: notice}));
        return this;
    }
});