import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_COMPLETE_PROFILE } from '../actions/profile_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  let newState;

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      if (!action.payload) return state;
      const newUser = { [action.payload.id]: action.payload};
      newState = merge({}, state, newUser);
      return newState;

    case RECEIVE_COMPLETE_PROFILE:
      const additionalUser = { [action.payload.user.id]: action.payload.user };
      newState = merge({}, state, additionalUser);
      return newState;

    default:
      return state;
  }

};

export default usersReducer;
