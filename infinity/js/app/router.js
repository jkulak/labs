var myApp = myApp || {};

myApp.Router = Backbone.Router.extend({

    // things to be initialized on app start
    initialize: function () {

        infinity.ui.init();        
    },

    // Define application routes
    routes: {

        '!/:action':      'indexAction',
        '!/track/id-:id': 'viewTrackAction',
        '*route':         'notFoundAction' // all other
    },

    indexAction: function (action) {

        console.log('router->main (' + action + ')');
 
        tracks.unbind('all');
        // Render ul element
        $('#main').html(new myApp.views.List({collection: tracks}).render().el);
    },

    notFoundAction: function (route) {

        console.log('router->' + route + ' (404, route not defined)');
        $('#main').html('<h2>404</h2>');
    },

    viewTrackAction: function (id) {

        console.log('router->track(' + id + ')');
        
        $('#main').html(new myApp.views.Track(id).el);

        // remove components
        // listView.remove();

        // unbind all events
        // tracks.unbind('all');

        // tracks.bind('reset', function () {
        //     $('#main').html(trackView.render(id).el);    
        // });
    }
});
