var TrackRow = Backbone.View.extend({

  tagName: "li",

  className: "row",

  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },

  render: function () {
  $(this.el).html(this.model.get('name'));
	  
  }

});


