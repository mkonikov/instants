import React from 'react';
import ProfilePostItem from './profile_post_item';

const ProfilePosts = (props) => {

  let posts;

  if (props.posts) {
    posts = props.posts.map((post) => {
      return (
        <li key={post.id}>
          <ProfilePostItem post={post} />
        </li>
      );
    });
  }

  return (
    <ul className="posts">
      {posts}
      <li></li>
      <li></li>
    </ul>
  );

};

export default ProfilePosts;
