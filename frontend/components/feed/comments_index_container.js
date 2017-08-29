import CommentsIndex from './comments_index';
import { connect } from 'react-redux';
import { selectComments } from '../../reducers/selectors';
import { deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  const comments = selectComments(ownProps.commentIds, state);
  return ({
    comments,
    currentUser: state.session.currentUser,
    postAuthor: ownProps.postAuthor,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    deleteComment: (id) => () => dispatch(deleteComment(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex);
