import { connect } from 'react-redux';
import NavbarTools from './navbar_tools';
import { logout } from '../../actions/session_actions';
import { toggleUpload } from '../../actions/ui_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  toggleUpload: () => {
    document.body.classList.add('modal-open');
    dispatch(toggleUpload());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarTools);
