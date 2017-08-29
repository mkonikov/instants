import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentsIndex extends React.Component {

  render() {
    const comments = this.props.comments.map((comment) => {
      return(
          <CommentIndexItem
            key={comment.id}
            comment={comment}
            currentUser={this.props.currentUser}
            postAuthor={this.props.postAuthor}
            deleteComment={this.props.deleteComment} />
      );
    });

    return (<ul>
      {comments}
    </ul>);
  }

}
export default CommentsIndex;
