var React = require('react');
var Link = require('react-router-component').Link;

var Navigation = React.createClass({
  render: function() {
    return (
      <div className="navigation">
          <Link className="navigation__link" href="/">main</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="navigation__link" href="/teachers">teachers</Link>
      </div>
    );
  }
});

module.exports = Navigation;
