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
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({caption: "", imageFile: null, imageURL: null,});
    document.body.classList.remove('modal-open');
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

  onDrop(image) {
    console.log(image);
    this.setState({imageFile: image[0], imageURL: image[0].preview});
  }

  render() {

    let imageArea;

    if (this.state.imageURL) {
      imageArea = (<img src={this.state.imageURL} />);
    } else {
      imageArea = (
        <div className="drop-zone">
          <Dropzone className="drop-default" onDrop={this.onDrop}>
           <p>click to choose your image or drag and drop here</p>
         </Dropzone>
        <input id="upload-image"
          type="file" onChange={this.updateImage} /></div>
      );
    }

    const displayMode = this.props.uploadOpen ? "active modal" : "modal";
    return(
      <div id="upload_modal"
        className={displayMode} onClick={this.closeModal}>
        <i className="fa fa-times" aria-hidden="true"></i>
        <div className="form-container"
          onClick={(e) => e.stopPropagation()}>
          <form onSubmit={this.handleSubmit}>
            <div id="form-main">
              <div className="form-inputs">
              <h2>New Post</h2>
              <textarea onChange={this.handleInput("caption")}
                placeholder="Write a caption..."
                value={this.state.caption}></textarea>
              </div>
              <div className="form-buttons">
              <input type="submit" value="Share" />
              <a onClick={this.closeModal}>
                Cancel</a>
              </div>
          </div>

          <div id="form-image">
            {imageArea}
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default withRouter(UploadModal);
