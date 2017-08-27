import React from 'react';

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleFollowClick = this.handleFollowClick.bind(this);
  }

  handleFollowClick(e) {
    e.preventDefault();
    this.props.followUser(this.props.user.id);
  }

  render() {
    const user = this.props.user;
    if (!user.profileFeed) return null;

    const numPosts = user.profileFeed.length;
    const numFollowers = user.followerUsernames.length;
    const numFollowees = user.followeeUsernames.length;
    const postsText = (numPosts === 1) ? 'post' : 'posts';
    const followersText = (numFollowers === 1) ? 'follower' : 'followers';
    debugger
    return (
      <div>
        <div id="details">
          <div className="avatar">
            <div><img src={user.avatarUrl} /></div>
            <button onClick={this.handleFollowClick}>Follow</button>
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
