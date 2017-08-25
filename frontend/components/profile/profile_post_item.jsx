import React from 'react';
import { Link } from 'react-router-dom';



const ProfilePostItem = ({ post }) => {
  return (
    <div>
      <Link to={`${post.authorName}/posts/${post.id}`}><img alt="time" src={post.thumbUrl} /></Link>
    </div>
  );
};

export default ProfilePostItem;
