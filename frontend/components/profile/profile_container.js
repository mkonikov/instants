import { connect } from 'react-redux';
import Profile from './profile';
import { fetchCompleteProfile } from '../../actions/profile_actions';


const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  return {
    user: username,
    userDetails: state.entities.users[username],
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  const username = ownProps.match.params.username;
    return {
    fetchCompleteProfile: (username) => dispatch(fetchCompleteProfile(username)),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// import { selectUserByUsername } from '../../reducers/selectors';
