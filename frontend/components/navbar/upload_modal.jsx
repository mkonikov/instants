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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[image]", this.state.imageFile);
    this.props.uploadPost(formData);
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
    return(
      <div id="upload_modal">
        <i className="fa fa-times" aria-hidden="true"></i>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            New Post
            <img src={this.state.imageURL} />
            <input type="file" onChange={this.updateImage} />
            <textarea onChange={this.handleInput("caption")}
              placeholder="Write a caption..."></textarea>
            <input type="submit" value="Share" />
          </form>
        </div>
      </div>
    )
  }

}

export default UploadModal;
