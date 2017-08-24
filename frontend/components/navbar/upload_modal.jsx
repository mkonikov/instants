import React from 'react';
import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router-dom';



class UploadModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: "",
      imageFile: null,
      imageURL: null,
    };
    this.updateImage = this.updateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({caption: "", imageFile: null, imageURL: null,});
    this.props.toggleUpload();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[image]", this.state.imageFile);
    this.props.uploadPost(formData)
      .then(() => {
        this.closeModal();
        this.props.history.push(`/${this.props.currentUser}`);
      });
  }


  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  updateImage(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: image, imageURL: fileReader.result, });
    };
    if (image) {
      fileReader.readAsDataURL(image);
    }
  }


  render() {

    const displayMode = this.props.uploadOpen ? "active" : "";
    return(
      <div id="upload_modal"
        className={displayMode} onClick={this.closeModal}>
        <i className="fa fa-times" aria-hidden="true"></i>
        <div className="form-container"
          onClick={(e) => e.stopPropagation()}>
          <form onSubmit={this.handleSubmit}>
            <div id="form-main">
              <h2>New Post</h2>
              <textarea onChange={this.handleInput("caption")}
                placeholder="Write a caption..."
                value={this.state.caption}></textarea>
              <button type="button">Cancel</button>
              <input type="submit" value="Share" />
          </div>

          <div id="form-image">
            <img src={this.state.imageURL} />
            <label htmlFor="upload-image">
              <div>
                Drag image Here</div>
              <input id="upload-image"
                type="file" onChange={this.updateImage} />

            </label>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default withRouter(UploadModal);
