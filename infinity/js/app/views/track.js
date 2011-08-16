var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.Track = Backbone.View.extend({
    
    tagName: 'div',
    className: 'track-details',

    template: _.template('<a href="<%= url %>"><img class="track-image" src="<%= imageUrl %>" /><%= artist %> - <%= title %></a>'),

    render: function () {

        this.id = 'track-' + this.model.get('id');
        $(this.el).html(this.template(this.model.toView()));
        return this;   
    }
});

myApp.views.TrackLi = Backbone.View.extend({
            
    tagName: 'li',
    template: _.template('<a href="<%= url %>"><img class="track-image" src="<%= imageUrl %>" /><%= artist %> - <%= title %></a>'),
    render: function () {

        $(this.el).html(this.template(this.model.toListView()));
        return this;
    }
});