import React from 'react';

class ProfileDetail extends React.Component {

  render() {

    if (!this.props.user.profileFeed) return null;

    const numPosts = this.props.user.profileFeed.length;
    const numFollowers = this.props.user.followerIds.length;
    const numFollowees = this.props.user.followeeIds.length;

    return (
      <div>
        <div id="details">
          <div className="avatar">
            <div><img src={this.props.user.avatarUrl} /></div>
          </div>
          <div>
            <div className="username">{this.props.user.username}</div>
            <div className="profile-counts">
              <div><strong>{numPosts}</strong> posts</div>
              <div><strong>{numFollowers}</strong> followers</div>
              <div><strong>{numFollowees}</strong> following</div>
            </div>
            <div className="bio">
              <span className="full-name">{this.props.user.name}</span>
              {this.props.user.bio}</div>
            </div>
          </div>
        </div>
      );

  }

}

export default ProfileDetail;
