import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_CURRENT_USER_POST = "RECEIVE_CURRENT_USER_POST";
export const RECEIVE_UPLOAD_ERROR = "RECEIVE_UPLOAD_ERROR";

export const uploadPost = post => dispatch => {
  return PostAPIUtil.uploadPost(post)
    .then(
      (post) => {
        dispatch(receiveCurrentUserPost(post));
      },
      (error) => {
        dispatch(receiveUploadError(error.responseJSON));
      }
    );
};


export const receiveCurrentUserPost = (post) => ({
  type: RECEIVE_CURRENT_USER_POST,
  payload: post,
});

export const receiveUploadError = (error) => ({
  type: RECEIVE_UPLOAD_ERROR,
  payload: error,
});
