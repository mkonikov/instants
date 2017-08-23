import { connect } from 'react-redux';
import NavbarTools from './navbar_tools';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.userId].username,
});


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarTools);
