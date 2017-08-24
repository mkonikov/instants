import React from 'react';
import Dropzone from 'react-dropzone';


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
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[image]", this.state.imageFile);
    this.props.uploadPost(formData)
      .then(this.props.toggleUpload());
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
      <div id="upload_modal" className={displayMode} onClick={this.props.toggleUpload}>
        <i className="fa fa-times" aria-hidden="true"></i>
        <div className="form-container" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={this.handleSubmit}>
            <div id="form-main">
              <h2>New Post</h2>
              <textarea onChange={this.handleInput("caption")}
                placeholder="Write a caption..."></textarea>
              <button>Cancel</button>
              <input type="submit" value="Share" />
          </div>

          <div id="form-image">
            <img src={this.state.imageURL} />
            <label htmlFor="upload-image">
              <div>
                Drag image Here</div>
              <input id="upload-image" type="file" onChange={this.updateImage} />

            </label>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default UploadModal;
