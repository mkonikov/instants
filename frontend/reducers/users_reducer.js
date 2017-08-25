import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_COMPLETE_PROFILE } from '../actions/profile_actions';
import { RECEIVE_CURRENT_USER_POST } from '../actions/post_actions';

import { merge, values } from 'lodash';

const usersReducer = (state = {}, action) => {
  let newState;
  let updatedUser;

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      if (!action.payload) return state;
      const newUser = { [action.payload.username]: action.payload};
      newState = merge({}, state, newUser);
      return newState;

    case RECEIVE_CURRENT_USER_POST:
      const currentUser = values(state).filter((user) => user.id === action.payload.authorId)[0];
      currentUser.profileFeed.unshift(action.payload.id);
      newState = merge({}, state, currentUser);
      return newState;

    case RECEIVE_COMPLETE_PROFILE:
      const additionalUser = { [action.payload.user.username]: action.payload.user };
      newState = merge({}, state, additionalUser);
      return newState;

    default:
      return state;
  }

};

export default usersReducer;
