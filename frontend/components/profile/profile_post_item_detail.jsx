import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';
import CommentsIndexContainer from '../feed/comments_index_container';
import CommentForm from '../feed/comment_form';

class ProfilePostItemDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submittingLike: false, };

    this.likeButtonCallback = this.likeButtonCallback.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.props.toggleLoading();
    this.props.fetchCompletePost()
      .then(this.props.toggleLoading);
    document.documentElement.classList.add('modal-open');

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

  likeButtonCallback() {
    if (this.state.submittingLike) {
      return null;
    } else if (this.props.post.hasLiked) {
      return (
          this.setState({submittingLike: true},
          () => this.props.unlikePost()
            .then(this.setState({submittingLike: false,})))
        );
    } else {
        return (
          this.setState({submittingLike: true},
          () => this.props.likePost()
            .then(this.setState({submittingLike: false,})))
          );
    }
  }

  renderLikeButton() {
    const likeClassName = (this.props.post.hasLiked) ? "fa fa-heart liked" : "fa fa-heart-o unliked";
    return(
      <i className={likeClassName} aria-hidden="true"
        onClick={this.likeButtonCallback}></i>
    );
  }

  renderDelete() {
    if (this.props.self) {
      return (<button type="button" onClick={this.delete}>
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </button>)
    }
  }


  render() {
    if (!this.props.post) return null;

    const post = this.props.post;
    const date = this.renderDate();

    const likes = (post.likeCount === 1) ? '1 like' : `${post.likeCount} likes`;
    const likeButton = this.renderLikeButton();
    const commentButton = (
      <label htmlFor={`comment-field-${post.id}`}>
        <i className="fa fa-comment-o"
      aria-hidden="true"></i>
      </label>
    );

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
                <div>
                  {likeButton}
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
