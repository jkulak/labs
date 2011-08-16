var App = Backbone.Router.extend({

    // things to be initialized on app start
    initialize: function () {

        infinity.ui.init();        
    },

    routes: {
        '!/:action':         'main',
        '!/track/id-:id':    'viewTrack',
        '*route':            'notFound'
    },

    notFound: function (route) {
        console.log('router->' + route + ' (404, route not defined)');
        $('#main').html('<h2>404</h2>');
    },

    main: function (action) {

        console.log('router->main (' + action + ')');
 
        // Render ul element
        $('#main').html(listView.render().el);
    },

    viewTrack: function (id) {

        console.log('router->track(' + id + ')');

        // remove components
        // listView.remove();

        // unbind all events
        // tracks.unbind('all');

        if (tracks.length) {
            var view = new myViews.TrackView({model: tracks.get(id)});
            var html = view.render().el;    
            $('#main').html(html);

        } else {
            tracks.bind('reset', function () {
                var view = new myViews.TrackView({model: tracks.get(id)});
                var html = view.render().el;    
                $('#main').html(html); 
            });
        };

        // tracks.bind('reset', function () {
        //     $('#main').html(trackView.render(id).el);    
        // });
    }
});
