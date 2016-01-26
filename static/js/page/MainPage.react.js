var React = require('react');
var Todo = require('../component/Todo.react');
var Navigation = require('../component/Navigation.react');

var MainPage = React.createClass({
    render: function() {
      return (
        <div className="main-page">
          <Navigation />
          <Todo />
        </div>
      );
    }
});

module.exports = MainPage;
