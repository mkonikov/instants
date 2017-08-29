export const selectFeedPosts = (postIds, state) => {
  let selectedPosts = [];
  for (var i = 0; i < postIds.length; i++) {
    selectedPosts.push(state.entities.posts[postIds[i]]);
  }
  return selectedPosts;
};

export const selectComments = (commentIds, state) => {
  let selectedComments = [];
  for (var i = 0; i < commentIds.length; i++) {
    selectedComments.push(state.entities.comments[commentIds[i]]);
  }
  return selectedComments;
};
