import React from 'react';

class ProfileDetail extends React.Component {

  render() {
    const user = this.props.user;
    if (!user.profileFeed) return null;

    const numPosts = user.profileFeed.length;
    const numFollowers = user.followerIds.length;
    const numFollowees = user.followeeIds.length;
    const postsText = (numPosts === 1) ? 'post' : 'posts';
    const followersText = (numFollowers === 1) ? 'follower' : 'followers';

    return (
      <div>
        <div id="details">
          <div className="avatar">
            <div><img src={user.avatarUrl} /></div>
          </div>
          <div>
            <div className="username">{user.username}</div>
            <div className="profile-counts">
              <div><strong>{numPosts}</strong> {postsText}</div>
              <div><strong>{numFollowers}</strong> {followersText}</div>
              <div><strong>{numFollowees}</strong> following</div>
            </div>
            <div className="bio">
              <span className="full-name">{user.name}</span>
              {user.bio}</div>
            </div>
          </div>
        </div>
      );

  }

}

export default ProfileDetail;
