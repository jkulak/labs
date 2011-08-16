var myApp = myApp || {};
myApp.views = myApp.views || {};

myApp.views.TrackLi = Backbone.View.extend({
            
    tagName: 'li',
    template: _.template('<a href="<%= url %>"><img class="track-image" src="<%= imageUrl %>" /><%= artist %> - <%= title %></a>'),
    render: function () {

        $(this.el).html(this.template(this.model.toListView()));
        return this;
    }
})