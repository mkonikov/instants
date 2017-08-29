import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from './comments_index_container';



class PostIndexItem extends React.Component {

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

    const post = this.props.post;
    const likeButton = this.renderLikeButton();
    const likes = (post.likeCount === 1) ? '1 like' : `${post.likeCount} likes`;

    return(
      <li className="feed-post">
        <div className="post-author">
          <Link to={`/${post.authorName}`}>
            <img src={post.authorAvatar} alt={post.authorName} />
          </Link>
          <Link to={`/${post.authorName}`}>
            {post.authorName}
          </Link>
        </div>
        <div>
          <img src={post.imageUrl} alt={post.caption} />
        </div>

        <div className="feed-post-details">

          <CommentsIndexContainer
            postAuthor = {post.authorName}
            commentIds = {post.commentIds} />

          <div className="feed-icons">
            {likeButton}
          </div>

          <div className="like-count">
            {likes}
          </div>

          <div className="feed-post-caption">
            <Link to={`/${post.authorName}`}>
              {post.authorName}
            </Link>{post.caption}
          </div>

          <div className="post-date">
            <Moment fromNow>{post.createdAt}</Moment>
          </div>
        </div>
      </li>
    );
  }

}

export default PostIndexItem;
