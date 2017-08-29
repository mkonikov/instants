import { connect } from 'react-redux';
import CommentForm from './comment_form';

const mapStateToProps = (state) => {
  return({});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  postComment: (comment) => dispatch(postComment(comment)),
  postId: ownProps.postId,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
