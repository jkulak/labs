var tracks = new myApp.collections.Tracks();
tracks.fetch();

$(function(){
    // Run application
    var router = new myApp.Router();
    app = new myApp.views.App();

    app.notifier.notify('DOM ready');

    // Start Backbone history a neccesary step for bookmarkable URL's
    Backbone.history.start();

    $('#action-test').click(function () {

        var item = new Track({artist: 'sssrt', title: 'sfdsfsd', artwork_url: 'avatar_ur', user: {username: 'fsfsdf'}});
        listView.addOne(item);
    });
});