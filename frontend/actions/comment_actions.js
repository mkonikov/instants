import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const postComment = comment => dispatch => {
  return CommentAPIUtil.postComment(comment)
    .then(
      (comment) => {
        dispatch(receiveComment(comment));
      });
};

export const deleteComment = comment => dispatch => {
  return CommentAPIUtil.deleteComment(comment)
    .then(
      (comment) => {
        dispatch(removeComment(comment));
      });
};

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment,
});
