export const selectFeedPosts = (postIds, state) => {
  let selectedPosts = [];
  for (var i = 0; i < postIds.length; i++) {
    selectedPosts.push(state.entities.posts[postIds[i]]);
  }
  return selectedPosts;
};
