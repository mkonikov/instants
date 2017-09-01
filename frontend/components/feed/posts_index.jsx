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

  componentWillReceiveProps(nextProps) {
    if (nextProps.feed.length > 1) {
      this.setState({newUser: false});
    }
  }


  render() {
    if (!this.props.feed) return null;

    if (this.state.newUser) {
      return (
        <div id="main-contain">
          <div id="feed">
            <NewUserFeed />
          </div>
        </div>
      )
    }

    const posts = this.props.feed.map((post) => {
      return (<PostIndexItem
        key={post.id}
        post={post} />);
    });
    return(
      <div id="main-contain">
        <ul id="feed">
          {posts}
        </ul>
      </div>
    );
  }
}

export default PostsIndex;
