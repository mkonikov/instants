import React from 'react';
import ProfileDetailContainer from './profile_detail_container';
import ProfilePosts from './profile_posts';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchCompleteProfile(this.props.user);
  }

  render() {
    return (
      <div id="profile">
        <ProfileDetailContainer />
        <ProfilePosts posts={this.props.feed} />
      </div>
    );

  }
}



export default Profile;
