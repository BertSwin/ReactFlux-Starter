var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router-component');
var MainPage = require('./page/MainPage.react');

ReactDOM.render(
  <Router.Locations hash>
      <Router.Location path="/" handler={MainPage} />
  </Router.Locations>,
  document.getElementById('diy')
);
