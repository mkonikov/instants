import React from 'react';

class UploadModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: "",
      imageFile: null,
      imageURL: null,
    };
    this.updateImage = this.updateImage.bind(this);
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[image]", this.state.imageFile);
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
    return(
      <div id="upload_modal">
        <i className="fa fa-times" aria-hidden="true"></i>
        <div className="form-container">
          <form>
            New Post
            <img src={this.state.imageURL} />
            <input type="file" onChange={this.updateImage} />
            <textarea placeholder="Write a caption..."></textarea>
            <input type="submit" value="Share" />
          </form>
        </div>
      </div>
    )
  }

}

export default UploadModal;
