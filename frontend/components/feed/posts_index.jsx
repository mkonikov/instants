import React from 'react';
import PostIndexItem from './post_index_item';
import NewUserFeed from './new_user_feed';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { newUser: false, };
  }

  componentDidMount() {
    this.props.toggleLoading();
    this.props.fetchFeed()
    .then(() => {
      const newUser = (this.props.feed.length < 1) ? true : false;
      this.setState({newUser});
      this.props.toggleLoading();
    });
  }


  render() {

    if (!this.props.feed) return null;

    if (this.state.newUser) {
      return (
        <div id="feed">
          <NewUserFeed />
        </div>
      )
    }

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
