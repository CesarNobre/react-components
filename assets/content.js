define(function(require) {
	var React = require('react');
	var ReactDOM = require('react-dom');

	var CommentBox = React.createClass({displayName: 'CommentBox',
	  render: function() {
	    return (
	      React.createElement('div', {className: "commentBox"},
	        "Hello, world! I am a CommentBox."
	        )
	    );
	  }
	});

	ReactDOM.render(
	  React.createElement(CommentBox, null),
	  document.getElementById('content')
	);

	ReactDOM.render(
	  React.createElement('h1', null, 'Hello, world!'),
	  document.getElementById('example')
	);
});