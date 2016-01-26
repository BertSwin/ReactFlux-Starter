var React = require('react');
var Navigation = require('../component/Navigation.react');
var Teacher = require('../component/Teacher.react');

var TeacherPage = React.createClass({
    render: function() {
      return (
        <div className="teachers-page">
          <Navigation />
          <Teacher id={this.props.teacherId} />
        </div>
      );
    }
});

module.exports = TeacherPage;
