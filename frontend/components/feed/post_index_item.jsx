import React from 'react';

class PostIndexItem extends React.Component {

  render() {

    const post = this.props.post;
    return(
      <div>
        <div className="post-author">{post.authorName}</div>
        <div><img src={post.imageUrl} alt={post.caption} /></div>
        <div>{post.createdAt}</div>
      </div>
    );
  }

}

export default PostIndexItem;
