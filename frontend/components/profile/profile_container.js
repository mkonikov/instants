import { connect } from 'react-redux';
import Profile from './profile';
import { fetchCompleteProfile } from '../../actions/profile_actions';
import { toggleLoading } from '../../actions/ui_actions';
import { selectFeedPosts } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  let feed;

  if (state.entities.users[username] &&
    state.entities.users[username].profileFeed) {
      feed = selectFeedPosts(state.entities.users[username].profileFeed, state);
    } else {
      feed = null;
    }

  return {
    user: username,
    userDetails: state.entities.users[username],
    feed,
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  const username = ownProps.match.params.username;
    return {
    fetchCompleteProfile: (username) => dispatch(fetchCompleteProfile(username)),
    toggleLoading: () => dispatch(toggleLoading()),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
