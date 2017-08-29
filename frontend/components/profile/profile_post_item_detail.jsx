import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';
import CommentsIndexContainer from '../feed/comments_index_container';





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

  renderDate() {
    const postDate = new Date(this.props.post.createdAt);
    const today = new Date();

    if (today - postDate < 864000000) {
      return (<Moment fromNow>{postDate}</Moment>);
    } else if (today.getYear().toString() === postDate.getYear().toString()) {
      const date = (<Moment format="MMMM D">{postDate}</Moment>);
      return date;
    } else {
      return (<Moment format="LL">{postDate}</Moment>);
    }

  }

  renderLikeButton() {
    if (this.props.post.hasLiked) {
      return(
        <i className="fa fa-heart liked"
          aria-hidden="true" onClick={this.props.unlikePost}></i>
);
    } else {
      return(
        <i className="fa fa-heart-o unliked"
          aria-hidden="true"  onClick={this.props.likePost}></i>
      );
    }
  }


  render() {
    if (!this.props.post) return null;

    const post = this.props.post;
    const date = this.renderDate();
    const likes = (post.likeCount === 1) ? '1 like' : `${post.likeCount} likes`;
    const likeButton = this.renderLikeButton();

    return (
      <div id="post-modal" className="modal" onClick={this.closeModal}>
        <i className="fa fa-times" aria-hidden="true"></i>
        <div id="post-container" onClick={(e) => e.stopPropagation()}>
          <div className="image">
            <img src={post.imageUrl} />
          </div>
          <div className="post-details">
            <div>
              <div id="post-author-details">
                <div className="avatar">
                  <Link to={`/${this.props.author.username}`}>
                    <img src={this.props.author.avatarUrl} />
                  </Link>
                </div>
                <Link to={`/${this.props.author.username}`}>
                  {this.props.author.username}</Link>
              </div>
              <div className="caption">
                <Link to={`/${this.props.author.username}`}>
                  {this.props.author.username}
                </Link>
                {post.caption}
              </div>
              <CommentsIndexContainer
                postAuthor = {this.props.author.username}
                commentIds = {post.commentIds} />
            </div>
            <div className="like-comments">
              <div className="icons">
                {likeButton}
              </div>
              <div className="like-count">
                {likes}
              </div>
              <div className="post-date">
                {date}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePostItemDetail);
