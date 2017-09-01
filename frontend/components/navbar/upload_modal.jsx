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
      submitting: false,
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    document.documentElement.classList.add('modal-open');
    document.title = `New Post • Instants`;
  }

  closeModal() {
    if (!this.state.submitting) {
      this.setState({caption: "", imageFile: null,
        imageURL: null, submitting: false,});
      document.documentElement.classList.remove('modal-open');
      document.title = `Instants`;
      this.props.clearErrors();
      this.props.toggleUpload();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitting: true,});
    const formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    if (this.state.imageFile) formData.append("post[image]", this.state.imageFile);
    document.title = `Sharing New Post... • Instants`;
    this.props.uploadPost(formData)
      .then(() => {
        this.setState({submitting: false,}, this.closeModal);
        this.props.history.push(`/${this.props.currentUser}`);
      }, () => {
        document.title = `New Post • Instants`;
        this.setState({submitting: false,});
      });
  }


  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  onDrop(acceptedImage, rejectedImage) {
    if (acceptedImage.length > 0) {
      this.setState({imageFile: acceptedImage[0],
        imageURL: acceptedImage[0].preview});
    }
  }

  renderSubmitButton() {
    if (this.state.submitting) {
      return (
        <button type="submit" disabled>Sharing
          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
        </button>
      );
    } else {
      return (
        <button type="submit">Share
        </button>
      );
    }
  }

  render() {

    let imageArea;

    if (this.state.imageURL) {
      imageArea = (<img src={this.state.imageURL} />);
    } else {
      imageArea = (
        <div className="drop-zone">
          <Dropzone accept="image/jpeg, image/png"
            multiple={false} className="drop-default"
            onDrop={this.onDrop}>
           <p>click to choose your image or drag and drop here</p>
         </Dropzone>
        <input id="upload-image"
          type="file" onChange={this.updateImage} /></div>
      );
    }

    return(
      <div id="upload_modal"
        className="modal" onClick={this.closeModal}>
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
              <div className="general-errors">
                {this.props.errors}
              </div>
              <div className="form-buttons">
              {this.renderSubmitButton()}
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
