import { connect } from 'react-redux';
import UploadModal from './upload_modal';
import { uploadPost } from '../../actions/post_actions';



const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  uploadPost: (post) => dispatch(uploadPost(post)),
});

export default connect(null, mapDispatchToProps)(UploadModal);
