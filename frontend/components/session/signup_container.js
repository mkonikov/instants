import { connect } from 'react-redux';
import Signup from './signup';
import { signup, login, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.signup,
});

const mapDispatchToProps = (dispatch) => ({
    clearErrors: () => dispatch(clearErrors()),
    signup: user => dispatch(signup(user)),
    loginGuest: () => dispatch(login({
      username: 'guest',
      password: 'password',
    })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
