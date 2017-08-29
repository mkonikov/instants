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
    if (e.keyCode === 13) {
      e.currentTarget.blur();
      let comment = this.state;
      comment.postId = this.props.postId;
      this.props.postComment(comment)
        .then(
          () => {
            this.setState({body: ""});
          }
        );
    }
  }

  handleInput(e) {
    this.setState({body: e.currentTarget.value});
  }

  render() {
    return (
      <form>
        <textarea value={this.state.body}
          onKeyDown={this.handleSubmit}
          onChange={this.handleInput}
          placeholder="Add a comment..."></textarea>
      </form>
    );
  }

}


const mapDispatchToProps = (dispatch, ownProps) => ({
  postComment: (comment) => dispatch(postComment(comment)),
  postId: ownProps.postId,
});

export default connect(null, mapDispatchToProps)(CommentForm);
