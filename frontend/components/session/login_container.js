import { connect } from 'react-redux';
import Login from './login';
import { login, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.userId),
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
