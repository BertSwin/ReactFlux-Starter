var React = require('react');
var Navigation = require('../component/Navigation.react');
var Teachers = require('../component/Teachers.react');

var TeachersPage = React.createClass({
    render: function() {
      return (
        <div className="teachers-page">
          <Navigation />
          <Teachers />
        </div>
      );
    }
});

module.exports = TeachersPage;
