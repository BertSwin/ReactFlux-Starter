var React = require('react');
var Todo = require('../component/Todo.react');

var MainPage = React.createClass({
    render: function() {
      return (
        <div className="main-page">
          <Todo />
        </div>
      );
    }
});

module.exports = MainPage;
