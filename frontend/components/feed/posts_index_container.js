import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchFeed } from '../../actions/post_actions';
import { selectFeedPosts } from '../../reducers/selectors';
import { likePost, unlikePost } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  let feed;

  if (state.ui.feedOrd) {
      feed = selectFeedPosts(state.ui.feedOrd, state);
    } else {
      feed = null;
    }
  return ({
    feed,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: () => dispatch(fetchFeed()),
  likePost: (id) => () => dispatch(likePost(id)),
  unlikePost: (id) => () => dispatch(unlikePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
