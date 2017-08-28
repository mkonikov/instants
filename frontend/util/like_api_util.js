export const likePost = (postId) => {
  return $.ajax({
    method: 'post',
    url: `/api/posts/${postId}/like`,
  });
};


export const unlikePost = (postId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/posts/${postId}/unlike`,
  });
};
