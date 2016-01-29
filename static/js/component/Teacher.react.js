var React = require('react');
var TeacherStore = require('../store/TeacherStore.react');

var Teacher = React.createClass({
  getInitialState() {
    return {
      teacher: TeacherStore.getTeacher(this.props.id)
    }
  },

  render: function() {
    return <span><b>{this.state.teacher.first} {this.state.teacher.last}</b></span>;
  }
});

module.exports = Teacher;
