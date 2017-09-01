import React from 'react';
import Dropzone from 'react-dropzone';
import FollowButton from '../buttons/follow';
import { Link } from 'react-router-dom';



class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
  }

  onDrop(image) {
    const formData = new FormData();
    formData.append("user[avatar]", image[0]);
    this.props.updateProfilePic(formData, this.props.user.id);
  }

  renderEditButton() {
    return (<Link to='/accounts/edit' className="edit-profile">Edit Profile</Link>);
  }

  renderAvatar() {
    if (this.props.self) {
      return (<div className="avatar">
        <Dropzone acceptedFiles="image/jpg,image/png"
          multiple={false} className="drop-default"
          onDrop={this.onDrop}>
          <img src={this.props.user.avatarUrl} />
        </Dropzone>
      </div>);
    } else {
      return (<div className="avatar">
        <div>
          <img src={this.props.user.avatarUrl} />
        </div>
      </div>);
    }
  }

  componentWillUnmount() {
    document.title = "Instants"
  }

  render() {
    const user = this.props.user;
    if (!user || !user.profileFeed || !user.followerUsernames) return null;
    document.title = `${user.name} (@${user.username}) • Instants`;

    const button = (this.props.self) ? this.renderEditButton() : <FollowButton user={user} />;
    const numPosts = user.profileFeed.length;
    const numFollowers = user.followerUsernames.length;
    const numFollowees = user.followeeUsernames.length;
    const postsText = (numPosts === 1) ? 'post' : 'posts';
    const followersText = (numFollowers === 1) ? 'follower' : 'followers';
    return (
      <div>
        <div id="details">
          {this.renderAvatar()}
          <div>
            <div className="user-head">
              <div className="username">{user.username}</div>
              <div className="follow-edit">{button}</div>
            </div>
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
