var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.Track = Backbone.View.extend({

    initialize: function (id) {

        this.model = tracks.get(id); 
        if ( undefined != this.model) {
            this.render(this.model);
        };
        

        tracks.bind('reset', function () {
            this.model = tracks.get(id);
            this.render(this.model);
        }, this);
    },
    
    tagName: 'div',
    className: 'track-details',

    template: _.template(
        '<a href="<%= url %>"><img class="track-image" src="<%= imageUrl %>" /><%= artist %> - <%= title %></a>'),

    render: function (model) {

        myApp.app.notifier.loading(model.get('user').username + ' - ' + model.get('title'));
        this.id = 'track-' + model.get('id');
        $(this.el).html(this.template(model.toView()));
        return this;   
    }
});

myApp.views.TrackLi = Backbone.View.extend({
            
    tagName: 'li',
    template: _.template(
        '<a href="<%= url %>"><img class="track-image" src="<%= imageUrl %>" /><%= artist %> - <%= title %></a>'),
    render: function () {

        $(this.el).html(this.template(this.model.toListView()));
        return this;
    }
});