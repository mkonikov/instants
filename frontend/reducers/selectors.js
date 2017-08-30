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

export const selectUsers = (usernames, state) => {
  let selectedUsers = [];
  for (var i = 0; i < usernames.length; i++) {
    selectedUsers.push(state.entities.users[usernames[i]]);
  }
  return selectedUsers;
};
