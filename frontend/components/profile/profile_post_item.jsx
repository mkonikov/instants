import React from 'react';
import { Link } from 'react-router-dom';



const ProfilePostItem = ({ post }) => {
  return (
    <div className="post-item">

      <Link to={`${post.authorName}/posts/${post.id}`}>
        <div className="post-item-hover">
          <div className="like-count">
            <i className="fa fa-heart" aria-hidden="true"></i> 0
          </div>
          <div className="comment-count">
            <i className="fa fa-comment" aria-hidden="true"></i> 0
          </div>
        </div>
        <img alt={post.caption} src={post.thumbUrl} />
      </Link>
    </div>
  );
};

export default ProfilePostItem;
