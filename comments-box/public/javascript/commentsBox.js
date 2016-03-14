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

var Comment = React.createClass({
  render: function() {
    return (
      <div className = "comment">
        <h2 className = "commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);