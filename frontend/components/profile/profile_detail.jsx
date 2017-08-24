import React from 'react';

class ProfileDetail extends React.Component {

  render() {
    debugger

    return(
      <div>Details
        {this.props.user.username}
        {this.props.user.name}
        {this.props.user.bio}
      </div>
    );
  }

}

export default ProfileDetail;
