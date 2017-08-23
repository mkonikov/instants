import React from 'react';
import { Link } from 'react-router-dom';


class NavbarTools extends React.Component {
  render() {
    return(
      <div id="tools">
        <a><img src={window.images.upload} /></a>
        <Link to={`/users/${this.props.currentUser}`}>
          <img src={window.images.profile} /></Link>
        <a onClick={this.props.logout}>
          <img src={window.images.logout} />
        </a>
      </div>
    );
  }
}

export default NavbarTools;
