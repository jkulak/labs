var tracks = new Tracks();
var listView = new myViews.ListView({collection: tracks});
// Crate instance of tracks collection



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