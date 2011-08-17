var tracks = new myApp.collections.Tracks();
tracks.fetch();

$(function(){
    // Run application
    myApp.router = new myApp.Router();
    myApp.app = new myApp.views.App();

    myApp.app.notifier.notify('DOM ready');

    // Start Backbone history a neccesary step for bookmarkable URL's
    // {pushState: true}
    Backbone.history.start();

    $('#action-test').click(function () {

        var item = new Track({artist: 'sssrt', title: 'sfdsfsd', artwork_url: 'avatar_ur', user: {username: 'fsfsdf'}});
        listView.addOne(item);
    });
});