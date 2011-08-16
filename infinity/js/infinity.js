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

        console.log(tracks.length);

        if (tracks.length) {
            var view = new myViews.TrackView({model: tracks.get(id)});
            var html = view.render().el;    
            console.log(html);
            $('#main').html(html);

        } else {
            tracks.bind('reset', function () {
                var view = new myViews.TrackView({model: tracks.get(id)});
                var html = view.render().el;    
                console.log(html);
                $('#main').html(html); 
            });
        };



        
        

        // tracks.bind('reset', function () {
        //     $('#main').html(trackView.render(id).el);    
        // });
    }
});


$(function(){
    // Run application
    var app = new App();
    appView = new myViews.AppView();

    // Start Backbone history a neccesary step for bookmarkable URL's
    Backbone.history.start();

    $('#action-test').click(function () {

        var item = new Track({artist: 'sssrt', title: 'sfdsfsd', artwork_url: 'avatar_ur', user: {username: 'fsfsdf'}});
        listView.addOne(item);
    });
});