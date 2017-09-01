import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_UPDATED_PROFILE } from '../actions/profile_actions';


const sessionReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState;

  switch (action.type) {

    case RECEIVE_UPDATED_PROFILE:
      return { currentUser: action.payload.username};

    case RECEIVE_USER:
      if (!action.payload) return { currentUser: null };
      return { currentUser: action.payload.username};

    default:
      return state;
  }

};

export default sessionReducer;
