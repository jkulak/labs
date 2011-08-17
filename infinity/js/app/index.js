var tracks = new myApp.collections.Tracks();
tracks.fetch();

$(function(){
    // Run application
    myApp.router = new myApp.Router();
    myApp.app = new myApp.views.App();

    myApp.app.notifier.notify('DOM ready');

    // Start Backbone history a neccesary step for bookmarkable URL's
    // Backbone.history.start({pushState: true, root: "/index.html"});
    Backbone.history.start();
});