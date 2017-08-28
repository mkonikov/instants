import React from 'react';

class PostsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    return(
      <div>
        Hey! I am a posts index.
      </div>
    );
  }
}

export default PostsIndex;
