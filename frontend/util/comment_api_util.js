export const postComment = (comment) => {
  return $.ajax({
    method: 'post',
    url: `/api/posts/${comment.postId}/comments`,
    data: {comment},
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/comments/${commentId}`,
  });
};
