import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchFeed } from '../../actions/post_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
