var appViews = appViews || {};

appViews.Track = Backbone.View.extend({
    
    tagName: 'div',
    className: 'track-details',

    template: _.template('<a href="<%= url %>"><img class="track-image" src="<%= imageUrl %>" /><%= artist %> - <%= title %></a>'),

    render: function () {

        this.id = 'track-' + this.model.get('id');
        $(this.el).html(this.template(this.model.toView()));
        return this;   
    }
});