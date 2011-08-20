var myApp = myApp || {};

myApp.Router = Backbone.Router.extend({

    // things to be initialized on app start
    initialize: function () {

        this.listView = new myApp.views.List();
        infinity.ui.init();        
    },

    // Define application routes
    routes: {

        '!/list-one': 'listOneAction',
        '!/list-two': 'listTwoAction',
        '!/:action':      'indexAction',
        '!/track/id-:id': 'viewTrackAction',
        '*route':         'notFoundAction' // all other
    },

    listOneAction: function () {

        this.listView.categoryId = 3;
        $('#main').html(this.listView.render().el);
    },

    listTwoAction: function () {

        this.listView.categoryId = 8;
        $('#main').html(this.listView.render().el);
    },

    indexAction: function (action) {

        console.log('router->main (' + action + ')');
 
        // tracks.unbind('all');
        // Render ul element
        // $('#main').html(new myApp.views.List({collection: tracks}).render().el);
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
