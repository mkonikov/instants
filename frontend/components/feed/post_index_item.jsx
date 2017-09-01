import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from './comments_index_container';
import CommentForm from './comment_form';
import LikeButton from '../buttons/like';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submittingLike: false, };
  }

  render() {

    const post = this.props.post;
    const commentButton = (
      <label htmlFor={`comment-field-${this.props.post.id}`}>
        <i className="fa fa-comment-o"
      aria-hidden="true"></i>
      </label>
    );
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

        <div className="feed-post-details like-comments">


          <div className="feed-icons icons">
            <div>
              <LikeButton postId={post.id} />
              {commentButton}
            </div>
          </div>

          <div className="like-count">
            {likes}
          </div>

          <div className="feed-post-caption">
            <Link to={`/${post.authorName}`}>
              {post.authorName}
            </Link>{post.caption}
          </div>

          <CommentsIndexContainer
            postAuthor = {post.authorName}
            commentIds = {post.commentIds} />

          <div className="post-date">
            <Moment fromNow>{post.createdAt}</Moment>
          </div>
          <div id="add-comment">
            <CommentForm postId={post.id} />
          </div>
        </div>
      </li>
    );
  }

}

export default PostIndexItem;
