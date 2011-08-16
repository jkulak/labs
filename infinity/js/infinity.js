var App = Backbone.Router.extend({
    // things to be initialized on app start
    initialize: function () {

        infinity.ui.init();
        appView.render();
    },

    routes: {
        '!/:action':         'main',
        '!/track/id-:id':    'viewTrack',
        '*route':            'notFound'
    },

    notFound: function (route) {
        console.log('router->' + route + ' (404, route not defined)');
    },

    main: function (action) {
        console.log('router->main (' + action + ')');
    },

    viewTrack: function (id) {
        console.log('router->track(' + id + ')');
        // this.navigate("!/track/id-" + id);
    }
});


$(function(){
    // Run application
    var app = new App();
    
    // Start Backbone history a neccesary step for bookmarkable URL's
    Backbone.history.start();   
});