import { connect } from 'react-redux';
import Signup from './signup';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';


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
