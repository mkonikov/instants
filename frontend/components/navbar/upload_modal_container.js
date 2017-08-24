import { connect } from 'react-redux';
import UploadModal from './upload_modal';
import { uploadPost } from '../../actions/post_actions';
import { toggleUpload } from '../../actions/ui_actions';



const mapStateToProps = (state) => ({
  uploadOpen: state.ui.uploadModal,
});

const mapDispatchToProps = (dispatch) => ({
  uploadPost: (post) => dispatch(uploadPost(post)),
  toggleUpload: () => dispatch(toggleUpload()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);
