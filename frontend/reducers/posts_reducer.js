import { RECEIVE_CURRENT_USER_POST } from '../actions/post_actions';
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

    case RECEIVE_COMPLETE_PROFILE:
      newState = merge({}, state, action.payload.posts);
      return newState;

    default:
      return state;

  }
};

export default postsReducer;
