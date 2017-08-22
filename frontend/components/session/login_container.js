import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.userId),
    errors: state.errors.login,
});

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
