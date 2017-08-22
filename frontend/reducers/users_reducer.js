import { RECEIVE_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  let newState;

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      const newUser = { [action.user.id]: action.user};
      newState = merge(state, { users: newUser });
      return newState;

    default:
      return state;
  }

};

export default sessionReducer;
