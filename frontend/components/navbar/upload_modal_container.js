import { connect } from 'react-redux';
import UploadModal from './upload_modal';
import { uploadPost } from '../../actions/post_actions';
import { toggleUpload, toggleLoading } from '../../actions/ui_actions';




const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  uploadPost: (post) => dispatch(uploadPost(post)),
  toggleUpload: () => dispatch(toggleUpload()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);
