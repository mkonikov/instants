import { connect } from 'react-redux';
import { toggleLoading } from '../../actions/ui_actions';
import ProfilePostItemDetail from './profile_post_item_detail';
import { fetchCompletePost,
  deletePost } from '../../actions/post_actions';
import { likePost, unlikePost } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
  const post = state.entities.posts[ownProps.match.params.postId];
  const author = (post) ? state.entities.users[post.authorName] : "";
  const currentUser = state.session.currentUser;

  return ({
    post: post,
    author: author,
    self: Boolean(author.username === currentUser),
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchCompletePost: () => dispatch(fetchCompletePost(ownProps.match.params.postId)),
    deletePost: () => dispatch(deletePost(ownProps.match.params.postId)),
    likePost: () => dispatch(likePost(ownProps.match.params.postId)),
    unlikePost: () => dispatch(unlikePost(ownProps.match.params.postId)),
    toggleLoading: () => dispatch(toggleLoading()),
  });
};



export default connect(mapStateToProps, mapDispatchToProps)(ProfilePostItemDetail);
