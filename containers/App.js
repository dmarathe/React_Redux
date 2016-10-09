var React = require('react');
var TrapitApp = require('./TrapitApp');
var Provider=require("react-redux").Provider;
var store = require('../stores/docs');

var App = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        {function() { return <TrapitApp />; }}
      </Provider>
    );
  }
});

module.exports = App;
