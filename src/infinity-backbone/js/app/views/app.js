var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.App = Backbone.View.extend({

    statsTemplate: _.template('<%= count %> tracks loaded...'),

    initialize: function () {

        // tracks.bind('add',      this.updateStat, this);
        // tracks.bind('remove',   this.updateStat, this);
        // tracks.bind('reset',    this.updateStat, this);

        this.notifier = new myApp.views.Notifier('body');
    },

    updateStat: function () {

        //$('#statbox').html(this.statsTemplate({count: tracks.length}));
    }
});