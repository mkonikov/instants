import { connect } from 'react-redux';
import ProfilePostItemDetail from './profile_post_item_detail';
import { fetchCompletePost } from '../../actions/post_actions';
import { likePost, unlikePost } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
  const post = state.entities.posts[ownProps.match.params.postId];
  const author = (post) ? state.entities.users[post.authorName] : "";
  return ({
    post: post,
    author: author,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchCompletePost: () => dispatch(fetchCompletePost(ownProps.match.params.postId)),
    likePost: () => dispatch(likePost(ownProps.match.params.postId)),
    unlikePost: () => dispatch(unlikePost(ownProps.match.params.postId)),
  });
};



export default connect(mapStateToProps, mapDispatchToProps)(ProfilePostItemDetail);
