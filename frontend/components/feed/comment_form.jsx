import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../../actions/comment_actions';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    let comment = this.state;
    e.preventDefault();
    comment.postId = this.props.postId;
    this.props.postComment(comment)
      .then(
        () => {
          this.setState({body: ""});
        }
      );
  }

  handleInput(e) {
    e.stopPropagation();
    this.setState({body: e.currentTarget.value});
  }

  render() {
    return (
      <form
        className="comment-form"
        onSubmit={this.handleSubmit}>
        <input id={`comment-field-${this.props.postId}`}
          value={this.state.body}
          onChange={this.handleInput}
          onKeyPress={(e) => e.stopPropagation()}
          placeholder="Add a comment..." />
      </form>
    );
  }

}


const mapDispatchToProps = (dispatch, ownProps) => ({
  postComment: (comment) => dispatch(postComment(comment)),
  postId: ownProps.postId,
});

export default connect(null, mapDispatchToProps)(CommentForm);
