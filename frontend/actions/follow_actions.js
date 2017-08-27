import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_NEW_FOLLOW = "RECEIVE_NEW_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const followUser = followeeId => dispatch => {
  return FollowAPIUtil.followUser(followeeId)
    .then(
      (following) => {
        dispatch(receiveNewFollow(following));
      }
    );
};

export const unfollowUser = followeeId => dispatch => {
  return FollowAPIUtil.unfollowUser(followeeId)
    .then(
      (following) => {
        dispatch(removeFollow(following));
      }
    );
};


export const receiveNewFollow = (following) => ({
  type: RECEIVE_NEW_FOLLOW,
  following,
});

export const removeFollow = (following) => ({
  type: REMOVE_FOLLOW,
  following,
});
