export const followUser = (followeeId) => {
  return $.ajax({
    method: 'post',
    url: `/api/users/${followeeId}/follow`,
  });
};


export const unfollowUser = (followeeId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/users/${followeeId}/unfollow`,
  });
};
