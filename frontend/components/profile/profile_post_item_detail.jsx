import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';



class ProfilePostItemDetail extends React.Component {
  componentDidMount() {
    this.props.fetchCompletePost();
    document.body.classList.add('modal-open');
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }


  render() {
    if (!this.props.post) return null;

    return (
      <div id="post-modal" className="modal">
        <i className="fa fa-times" aria-hidden="true"></i>
        <div id="post-container">
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

export default ProfilePostItemDetail;
