import React from 'react';

class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>User</div>
    );

  }
}



export default Profile;
