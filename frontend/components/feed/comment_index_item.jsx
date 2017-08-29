import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = ({comment, deleteComment, currentUser, postAuthor}) => {

  let commentFull;

  const commentBody = (
    <div className="comment-item">
      <Link to={`/${comment.authorName}`}>
        {comment.authorName}
      </Link>
      {comment.body}
    </div>
  );

  const deleteButton = (
    <button className="delete-comment"
      onClick={deleteComment(comment.id)}>
      &#10005;
    </button>
  );

  if (currentUser === comment.authorName || currentUser === postAuthor) {
    commentFull = (
      <div className="full-comment">
        {commentBody}
        {deleteButton}
      </div>
    );
  } else {
    commentFull = (
      <div className="full-comment">
        {commentBody}
      </div>
    );
  }

  return (<li>
      {commentFull}
  </li>);
};

export default CommentIndexItem;
