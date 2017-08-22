import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { login, signup } from '../../actions/session_actions';


const mapStateToProps = ({ errors }) => {
  const formType = location.pathname.slice(1);
  const selectErrors = (formType === 'login') ? errors.login : errors.signup;

  return {
    loggedIn: Boolean(session.userId),
    errors: selectErrors,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return ({
    processForm: user => dispatch(processForm(user)),
    formType
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
