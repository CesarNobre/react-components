define(function(require) {
	var React = require('react');
	var ReactDOM = require('react-dom');

	var CommentList = React.createClass({displayName:"CommentList",
	  render: function() {
	    return (
	    	React.createElement('div',{className: 'commentList'},
	        'Hello, world! I am a CommentList.'
	        )
	    );
	  }
	});

	var CommentForm = React.createClass({
	  render: function() {
	    return (
	    	React.createElement('div', {className:'commentForm'},
	        'Hello, world! I am a CommentForm.'
	        )
	    );
	  }
	});

	return {
		CommentList : CommentList,
		CommentForm : CommentForm
	}
});