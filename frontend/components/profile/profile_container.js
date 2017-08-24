import { connect } from 'react-redux';
import Profile from './profile';
import { fetchCompleteProfile } from '../../actions/profile_actions';


const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  return {
    test: false,
    // user: selectUserByUsername(username, state),
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  const username = ownProps.match.params.username;
    return {
    fetchCompleteProfile: () => dispatch(fetchCompleteProfile(username)),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// import { selectUserByUsername } from '../../reducers/selectors';
