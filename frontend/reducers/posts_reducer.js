import { RECEIVE_CURRENT_USER_POST,
  RECEIVE_COMPLETE_POST, RECEIVE_FEED } from '../actions/post_actions';
import { RECEIVE_COMPLETE_PROFILE } from '../actions/profile_actions';
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newPost;
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER_POST:
      newPost = {[action.payload.id]: action.payload };
      newState = merge({}, state, newPost);
      return newState;

    case RECEIVE_COMPLETE_POST:
      newPost = {[action.payload.id]: action.payload };
      newState = merge({}, state, newPost);
      // Possible to do: consider merging receive complete
      // and current user post - only in this reducer!
      return newState;

    case RECEIVE_COMPLETE_PROFILE:
      newState = merge({}, state, action.payload.posts);
      return newState;

    case RECEIVE_FEED:
      newState = merge({}, state, action.payload.posts);
      return newState;

    default:
      return state;

  }
};

export default postsReducer;
