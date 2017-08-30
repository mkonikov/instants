export const uploadPost = (post) => {
  return $.ajax({
    method: 'post',
    data: post,
    url: '/api/posts',
    contentType: false,
    processData: false,
  });
};

export const fetchCompletePost = (postId) => {
  return $.ajax({
    method: 'get',
    url: `/api/posts/${postId}`,
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/posts/${postId}`,
  });
};

export const fetchFeed = () => {
  return $.ajax({
    method: 'get',
    url: `/api/posts`
  });
};
