var React = require('react');

var Router = require('react-router');
var Route  = React.createFactory(Router.Route);
var DefaultRoute = React.createFactory(Router.DefaultRoute);

var format = require('./utils/format');

var Dashboard = require('./components/Dashboard');
var Manifest  = require('./components/Manifest');
var App       = require('./components/App');

var container = document.getElementById('main');

var routes = format(
    Route({path: '/', handler: App},
      DefaultRoute({name: 'dashboard', handler: Dashboard}),
      Route({name: 'manifest', handler: Manifest})
    )
);

(function main() {
  Router.run(routes, function (Handler) {
    var handler = React.createFactory(Handler);
    React.render(handler(), container);
  });
});
