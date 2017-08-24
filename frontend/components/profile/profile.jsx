import React from 'react';
import ProfileDetailContainer from './profile_detail_container';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchCompleteProfile(this.props.user);
  }

  render() {
    return (
      <div>
        User
      <ProfileDetailContainer />
      </div>
    );

  }
}



export default Profile;
