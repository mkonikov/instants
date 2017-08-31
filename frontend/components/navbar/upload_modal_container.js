import { connect } from 'react-redux';
import { uploadPost } from '../../actions/post_actions';
import { clearErrors } from '../../actions/error_actions';
import { toggleUpload, toggleLoading } from '../../actions/ui_actions';
import UploadModal from './upload_modal';




const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.generalErrors,
});

const mapDispatchToProps = (dispatch) => ({
  uploadPost: (post) => dispatch(uploadPost(post)),
  toggleUpload: () => dispatch(toggleUpload()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);
