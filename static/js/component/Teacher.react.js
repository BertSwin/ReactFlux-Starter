var React = require('react');
var TeacherStore = require('../store/TeacherStore.react');

var Teacher = React.createClass({
  getInitialState() {
    return {
      teacher: TeacherStore.getTeacher(this.props.id)
    }
  },

  render: function() {
    return <span>{this.state.teacher.first} {this.state.teacher.last}</span>;
  }
});

module.exports = Teacher;
