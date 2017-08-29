import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = ({comment, deleteComment, currentUser, postAuthor}) => {

  let commentFull;

  const commentBody = (
    <div>
      <Link to={`/${comment.authorName}`}>
        {comment.authorName}
      </Link>
      {comment.body}
    </div>
  );

  const deleteButton = (
    <button onClick={deleteComment(comment.id)}>
      &#10005;
    </button>
  );

  if (postAuthor === comment.authorName || currentUser === postAuthor) {
    commentFull = (
      <div>
        {commentBody}
        {deleteButton}
      </div>
    );
  } else {
    commentFull = (
      <div>
        {commentBody}
      </div>
    );
  }

  return (<li>
      {commentFull}
  </li>);
};

export default CommentIndexItem;
