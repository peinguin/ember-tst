App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var obj = {};
    obj[type.typeKey] = payload;
    return this._super(store, type, obj);
  }
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  body:  DS.attr('string')
});
