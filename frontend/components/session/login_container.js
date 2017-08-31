import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';


const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.login,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  login: user => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
