import React from 'react';

const ProfilePostItem = ({ post }) => {
  return (
    <div>
      <img src={post.thumbUrl} />
    </div>
  );
};

export default ProfilePostItem;
