import React from 'react';
import PostIndexItem from './post_index_item';

class PostsIndex extends React.Component {

  componentDidMount() {
    this.props.toggleLoading();
    this.props.fetchFeed()
    .then(this.props.toggleLoading);
  }

  renderNoFollows() {
    return (
      <div>
        Welcome to Instants!
        Follow accounts to see photos in your feed.
      </div>
    );
  }

  render() {

    if (!this.props.feed) return null;

    const posts = this.props.feed.map((post) => {
      return (<PostIndexItem
        likePost={this.props.likePost(post.id)}
        unlikePost={this.props.unlikePost(post.id)}
        key={post.id}
        post={post} />);
    });
    return(
      <ul id="feed">
        {posts}
      </ul>
    );
  }
}

export default PostsIndex;
