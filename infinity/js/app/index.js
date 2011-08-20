// 1. get groups 
// 2. parse categories and store categories as gg.hv.data.categories['catalog'], gg.hv.data.categories['popular'], and so on...
// 3. 


// Preload data
myApp.categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
myApp.tracks = myApp.tracks || {};
_.each(myApp.categories, function (v) {

    myApp.tracks[v] = new myApp.collections.Tracks();
    myApp.tracks[v].id = v;
    myApp.tracks[v].fetch();    
}) ;

$(function(){
    // Run application
    myApp.router = new myApp.Router();
    myApp.app = new myApp.views.App();

    myApp.app.notifier.notify('DOM ready');

    // Start Backbone history a neccesary step for bookmarkable URL's
    // Backbone.history.start({pushState: true, root: "/index.html"});
    Backbone.history.start();
});