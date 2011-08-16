var myViews = function () {
    
    return {

        TrackView: Backbone.View.extend({
            
            tagName: 'div',
            className: 'track-details',

            template: _.template('<a href="<%= url %>"><img class="track-image" src="<%= imageUrl %>" /><%= artist %> - <%= title %></a>'),

            render: function () {

                console.log('track view render', this.model);
                this.id = 'track-' + this.model.get('id');
                $(this.el).html(this.template(this.model.toView()));
                return this;   
            }
        }),

        ListItemTrackView: Backbone.View.extend({
            
            tagName: 'li',
            template: _.template('<a href="<%= url %>"><img class="track-image" src="<%= imageUrl %>" /><%= artist %> - <%= title %></a>'),
            render: function () {

                $(this.el).html(this.template(this.model.toListView()));
                return this;   
            }
        }),

        ListView: Backbone.View.extend({

            tagName: 'ul',
            id: 'item-list',            

            initialize: function () {

                // tracks.bind('reset', this.addAll, this);
                tracks.bind('reset', this.addAll, this);
            },

            events: {
                "click li": "itemClick",

            },

            itemClick: function (event) {
                console.log('click item!', event);  
            },

            addAll: function () {

                $(this.el).html('');
                tracks.each(this.addOne, this);
            },

            addOne: function (item) {

                var view = new myViews.ListItemTrackView({model: item});
                $(this.el).append(view.render().el);
            },

            render: function () {

                // add all before render
                this.addAll();
                return this;
            },

            remove: function () {
                $(this.el).remove();
            }

        }),

        AppView: Backbone.View.extend({

            statsTemplate: _.template('<%= count %> tracks loaded...'),

            initialize: function () {

                tracks.bind('add',      this.updateStat, this);
                tracks.bind('remove',   this.updateStat, this);
                tracks.bind('reset',    this.updateStat, this);
            },

            updateStat: function () {

                $('#statbox').html(this.statsTemplate({count: tracks.length}));
            }
        })
    };
}();

var listView = new myViews.ListView();