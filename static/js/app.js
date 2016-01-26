var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-component');
var MainPage = require('./page/MainPage.react');
var TeachersPage = require('./page/TeachersPage.react');
var TeacherPage = require('./page/TeacherPage.react');

ReactDOM.render(
  <Router.Locations hash>
      <Router.Location path="/" handler={MainPage} />
      <Router.Location path="/teachers" handler={TeachersPage} />
      <Router.Location path="/teacher/:teacherId" handler={TeacherPage} />
  </Router.Locations>,
  document.getElementById('diy')
);
