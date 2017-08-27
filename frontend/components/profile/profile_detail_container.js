import { connect } from 'react-redux';
import ProfileDetail from './profile_detail';
import { withRouter } from 'react-router-dom';
import { followUser, unfollowUser } from '../../actions/follow_actions';



const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  return {
    user: state.entities.users[username],
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (followeeId) => dispatch(followUser(followeeId)),
    unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDetail));
