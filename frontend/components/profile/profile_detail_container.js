import { connect } from 'react-redux';
import ProfileDetail from './profile_detail';
import { withRouter } from 'react-router-dom';
import { updateProfilePic } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const profileVisiting = state.entities.users[username];
  const currentUser = state.session.currentUser;

  return {
    user: profileVisiting,
    self: Boolean(username === currentUser),
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfilePic: (form, userId) => dispatch(updateProfilePic(form, userId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDetail));
