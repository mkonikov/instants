import React from 'react';
import NewUserFollowSuggestions from './new_user_follow_suggestions';

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
        <NewUserFollowSuggestions />
      </div>
    );
  }
}

export default NewUserFeed;
