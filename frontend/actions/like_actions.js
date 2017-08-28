import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_NEW_LIKE = "RECEIVE_NEW_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const likePost = postId => dispatch => {
  return LikeAPIUtil.likePost(postId)
    .then(
      (like) => {
        dispatch(receiveNewLike(like));
      }
    );
};

export const unlikePost = postId => dispatch => {
  return LikeAPIUtil.unlikePost(postId)
    .then(
      (like) => {
        dispatch(removeLike(like));
      }
    );
};


export const receiveNewLike = (like) => ({
  type: RECEIVE_NEW_LIKE,
  like,
});

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like,
});
