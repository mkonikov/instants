import React from 'react';

class NewUserFeed extends React.Component {

  renderWelcome() {
    return (
      <div className="instants-container" id="welcome">
        <p>
          <strong>Welcome to Instants!</strong>
        </p>
        <p>
          Follow accounts to see photos in your feed.
        </p>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.renderWelcome()}
      </div>
    );
  }
}

export default NewUserFeed;
