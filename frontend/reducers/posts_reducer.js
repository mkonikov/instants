import { RECEIVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;

  switch (action.type) {
    case RECEIVE_POST:
      newState = merge({}, state, action.payload);
      return newState;

    default:
      return state;

  }
};

export default postsReducer;
