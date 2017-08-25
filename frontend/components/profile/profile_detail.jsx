import React from 'react';

class ProfileDetail extends React.Component {

  render() {

    return(
      <div id="details">
        <div className="avatar">
          IMAGE
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

}

export default ProfileDetail;
