var tracks = new appCollections.Tracks();
var listView = new appViews.List({collection: tracks});

$(function(){
    // Run application
    var router = new myApp.Router();
    var app = new appViews.App();

    // Start Backbone history a neccesary step for bookmarkable URL's
    Backbone.history.start();

    $('#action-test').click(function () {

        var item = new Track({artist: 'sssrt', title: 'sfdsfsd', artwork_url: 'avatar_ur', user: {username: 'fsfsdf'}});
        listView.addOne(item);
    });
});