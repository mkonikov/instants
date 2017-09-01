import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import CommentsIndexContainer from '../feed/comments_index_container';
import CommentForm from '../feed/comment_form';
import LikeButton from '../buttons/like';

class ProfilePostItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submittingLike: false, };

    this.closeModal = this.closeModal.bind(this);
    this.delete = this.delete.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    let author = this.props.post.authorName;

    if (e.key === "ArrowRight" && this.props.nextPost) {
      this.props.history.push(`/${author}/posts/${this.props.nextPost}`);
    } else if (e.key === "ArrowLeft" && this.props.previousPost) {
      this.props.history.push(`/${author}/posts/${this.props.previousPost}`);
    }
  }

  componentDidMount() {
    this.props.toggleLoading();
    this.props.fetchCompletePost()
      .then(this.props.toggleLoading);
    document.documentElement.classList.add('modal-open');
    // window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillReceiveProps() {

  }

  delete() {
    this.props.deletePost();
    this.closeModal();
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('modal-open');
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

  renderDelete() {
    if (this.props.self) {
      return (<button type="button" onClick={this.delete}>
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </button>)
    }
  }

  handleBlur(e) {
    if (!e.relatedTarget || e.relatedTarget.form.classList.value !== "comment-form") {
      e.currentTarget.focus();
    }
  }


  render() {
    if (!this.props.post) return null;

    const post = this.props.post;
    const date = this.renderDate();

    const likes = (post.likeCount === 1) ? '1 like' : `${post.likeCount} likes`;
    const commentButton = (
      <label htmlFor={`comment-field-${post.id}`}>
        <i className="fa fa-comment-o"
      aria-hidden="true"></i>
      </label>
    );

    return (
      <div id="post-modal"
        className="modal"
        onClick={this.closeModal}>
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
              <div className="caption-comments">
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
              </div>
            <div className="like-comments">
              <div className="icons">
                <input type="text"
                  id="keyboard-nav"
                  onKeyDown={this.handleKeyPress}
                  onBlur={this.handleBlur}
                  autoFocus
                   />
                <div>
                  <LikeButton postId={post.id} />
                  {commentButton}
                </div>
                {this.renderDelete()}
              </div>
              <div className="like-count">
                {likes}
              </div>
              <div className="post-date">
                {date}
              </div>
              <div id="add-comment">
                <CommentForm postId={post.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePostItemDetail);
