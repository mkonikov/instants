import React from 'react';
import ProfilePostItem from './profile_post_item';

const ProfilePosts = (props) => {

  let posts;

  if (props.posts) {
    posts = props.posts.map((post) => {
      return (
        <ProfilePostItem key={post.id} post={post} />
      );
    });
  } 

  return (
    <div className="posts">
      {posts}
    </div>
  );

};

export default ProfilePosts;
