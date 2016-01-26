var React = require('react');
var Link = require('react-router-component').Link;
var TeacherStore = require('../store/TeacherStore.react');
var Teacher = require('../component/Teacher.react');

var Teachers = React.createClass({
  getInitialState() {
    return {
      teachers: TeacherStore.getTeachers()
    }
  },

  render: function() {
    var items = this.state.teachers.map(function(teacher) {
      return <li className='teachers__teacher' key={teacher.id}><Link href={`/teacher/${teacher.id}`}><Teacher id={teacher.id} /></Link></li>;
    });

    return (
        <ul className="teachers">
            {items}
        </ul>
    );
  }
});

module.exports = Teachers;
