import React from 'react';
import ProfileDetailContainer from './profile_detail_container';
import ProfilePosts from './profile_posts';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchCompleteProfile(this.props.user);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.props.fetchCompleteProfile(nextProps.user);
    }

    // TODO: Page should add latest uploaded image after uploading image.
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
