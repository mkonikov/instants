import { connect } from 'react-redux';
import Signup from './signup';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.userId),
    errors: state.errors.signup,
});

const mapDispatchToProps = (dispatch) => ({
    signup: user => dispatch(signup(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
