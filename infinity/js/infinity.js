var App = Backbone.Router.extend({
    initialize: function () {
        infinity.apihandler.init('#body');
        infinity.timeline.init('#main-list');
        infinity.statbox.init('#statbox');

        infinity.ui.init();

        infinity.apihandler.getTracks();
    },
    routes: {
        '!/track/id-:id':    'viewTrack',
        '':                  'main'
        
        // "!/help":                 "help",    // #help
        // "!/search/:query":        "search",  // #search/kiwis
        // "!/search/:query/p:page": "search"   // #search/kiwis/p7
    },

    main: function (action) {
        console.log('router->main (' + action + ')');
        tracks.fetch(); 
    },

    viewTrack: function (id) {
        console.log('router->main');
        console.log('viewing track: ' . id);
    }
});


$(function(){
    // bind event bus events
    $.subscribe('apihandler:gettracks:success', function(data) {

        infinity.timeline.append(data);
        // TODO: use Model, and not DOM :/
        infinity.statbox.updateTracksCount($('#main-list ul').children().size());
    });

    // bind DOM events
    $(window).bind('resize', infinity.ui.init);
    
    $(window).bind('scroll', function() {

        if($(window).scrollTop() + $(window).height() > $(document).height() - (0.125*$(document).height())) {
            infinity.apihandler.getTracks();
        }
    });
    
    $('#action-reaload-tracks').bind('click', function() {
        infinity.timeline.clearList();
        infinity.apihandler.getTracks();
    });

    // img error handling
    $('#main-list ul li img').bind('error', function () {
        $(this).attr('src', 'images/imgerror.png');
    });

    // Run application
    var app = new App();

    // Start Backbone history a neccesary step for bookmarkable URL's
    Backbone.history.start();

});