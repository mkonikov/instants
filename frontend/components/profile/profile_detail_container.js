import { connect } from 'react-redux';
import ProfileDetail from './profile_detail';
import { withRouter } from 'react-router-dom';
import { followUser, unfollowUser } from '../../actions/follow_actions';



const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const currentUser = state.entities.users[state.session.currentUser];
  return {
    user: state.entities.users[username],
    followStatus: currentUser.followeeUsernames.includes(username),
    self: Boolean(username === currentUser.username),
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (followeeId) => dispatch(followUser(followeeId)),
    unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDetail));
