var SearchView = Backbone.View.extend({

  initialize: function() {

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
