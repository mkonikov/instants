import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';



class PostIndexItem extends React.Component {

  render() {

    const post = this.props.post;
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
        <div><img src={post.imageUrl} alt={post.caption} /></div>
        <div className="feed-post-details">
          <div className="feed-post-caption">
            <Link to={`/${post.authorName}`}>
              {post.authorName}
            </Link>{post.caption}
          </div>
          <div><Moment fromNow>{post.createdAt}</Moment></div>
        </div>
      </li>
    );
  }

}

export default PostIndexItem;
