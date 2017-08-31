import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER_POST = "RECEIVE_CURRENT_USER_POST";
export const RECEIVE_COMPLETE_POST = "RECEIVE_COMPLETE_POST";
export const RECEIVE_FEED = "RECEIVE_FEED";
export const REMOVE_POST = "REMOVE_POST";

export const uploadPost = post => dispatch => {
  return PostAPIUtil.uploadPost(post)
    .then(
      (post) => {
        dispatch(receiveCurrentUserPost(post));
      },
      (error) => {
        dispatch(receiveErrors(error.responseJSON));
      }
    );
};

export const fetchCompletePost = postId => dispatch => {
  return PostAPIUtil.fetchCompletePost(postId)
    .then(
      (post) => {
        dispatch(receiveCompletePost(post));
      }
    );
};

export const fetchFeed = () => dispatch => {
  return PostAPIUtil.fetchFeed()
  .then(
    (feed) => {
      dispatch(receiveFeed(feed));
    });
  };

export const deletePost = (postId) => dispatch => {
  return PostAPIUtil.deletePost(postId)
  .then(
    (post) => {
      dispatch(removePost(post));
    });
  };

export const receiveCompletePost = (post) => ({
  type: RECEIVE_COMPLETE_POST,
  payload: post,
});

export const receiveCurrentUserPost = (post) => ({
  type: RECEIVE_CURRENT_USER_POST,
  payload: post,
});

export const receiveFeed = (feed) => ({
  type: RECEIVE_FEED,
  payload: feed,
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  payload: post,
});
