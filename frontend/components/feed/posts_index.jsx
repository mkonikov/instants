import React from 'react';
import PostIndexItem from './post_index_item';

class PostsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {

    if (!this.props.feed) return null;

    const posts = this.props.feed.map((post) => {
      return (<PostIndexItem key={post.id} post={post} />);
    });
    return(
      <ul id="feed">
        {posts}
      </ul>
    );
  }
}

export default PostsIndex;
