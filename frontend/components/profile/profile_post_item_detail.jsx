import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { withRouter } from 'react-router-dom';




class ProfilePostItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchCompletePost();
    document.body.classList.add('modal-open');
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }

  closeModal() {
    this.props.history.push(`/${this.props.author.username}`);
  }


  render() {
    if (!this.props.post) return null;

    return (
      <div id="post-modal" className="modal" onClick={this.closeModal}>
        <i className="fa fa-times" aria-hidden="true"></i>
        <div id="post-container" onClick={(e) => e.stopPropagation()}>
        <div className="image">
          <img src={this.props.post.imageUrl} />
        </div>
        <div>
          <div id="post-author-details">
          <Link to={`/${this.props.author.username}`}>
            <img src={this.props.author.avatarUrl} /></Link>

          <Link to={`/${this.props.author.username}`}>
            {this.props.author.username}</Link>
          </div>
          <div>
            <Link to={`/${this.props.author.username}`}>
              {this.props.author.username}</Link>
            {this.props.post.caption}
          </div>
          <div>
            <Moment fromNow>{this.props.post.createdAt}</Moment>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(ProfilePostItemDetail);
