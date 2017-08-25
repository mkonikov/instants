import React from 'react';

class ProfileDetail extends React.Component {

  render() {

    let profileDetails;

    if (this.props.user) {
      profileDetails = (
        <div id="details">
        <div className="avatar">
          <div><img src={this.props.user.avatarUrl} /></div>
        </div>
        <div>
          <div className="username">{this.props.user.username}</div>
          <div className="bio">
            <span className="full-name">{this.props.user.name}</span>
            {this.props.user.bio}</div>
        </div>
      </div>
      );
    }


    return(
      <div>
        {profileDetails}
      </div>
    );
  }

}

export default ProfileDetail;
