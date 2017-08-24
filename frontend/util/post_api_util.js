export const upload = (post) => {
  return $.ajax({
    method: 'post',
    data: post,
    url: '/api/posts',
    contentType: false,
    processData: false,
  });
};
