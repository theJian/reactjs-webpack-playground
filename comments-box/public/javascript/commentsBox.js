var CommentForm = React.createClass({
  render: function() {
    return (
      <div className = "CommentForm">
        Hello, world! I am a commentForm.
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className = "CommentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className = "commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);