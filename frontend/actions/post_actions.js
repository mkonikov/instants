import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_UPLOAD_ERROR = "RECEIVE_UPLOAD_ERROR";

export const upload = post => dispatch => {
  return PostAPIUtil.upload(post)
    .then(
      (post) => {
        dispatch(receivePost(post));
      },
      (error) => {
        dispatch(receiveUploadError(error.responseJSON));
      }
    );
};


export const receivePost = (post) => ({
  type: RECEIVE_POST,
  payload: post,
});

export const receiveUploadError = (error) => ({
  type: RECEIVE_UPLOAD_ERROR,
  payload: error,
});
