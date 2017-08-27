import React from 'react';

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(type) {
    return (e) => {
      const userId = this.props.user.id;
      e.preventDefault();
      if (type === 'follow') {
        this.props.followUser(userId);
      } else if (type === 'unfollow') {
        this.props.unfollowUser(userId);
      }
    };
  }

  renderFollowButton() {
    return (<button className="follow"
    onClick={this.handleButtonClick('follow')}>Follow</button>);
  }

  renderUnfollowButton() {
    return (<button className="unfollow"
    onClick={this.handleButtonClick('unfollow')}>Following</button>);
  }

  renderEditButton() {
    return (<button className="edit-profile"
    onClick={this.handleButtonClick('edit')}>Edit Profile</button>);
  }

  render() {
    const user = this.props.user;
    if (!user || !user.profileFeed) return null;

    let button = (this.props.followStatus) ? this.renderUnfollowButton() : this.renderFollowButton();
    if (this.props.self) button = this.renderEditButton();
    const numPosts = user.profileFeed.length;
    const numFollowers = user.followerUsernames.length;
    const numFollowees = user.followeeUsernames.length;
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
            <div className="follow-edit">{button}</div>
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
