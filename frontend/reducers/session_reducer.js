import { RECEIVE_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      if (!action.payload) return { currentUser: null };
      return { currentUser: action.payload.username};

    default:
      return state;
  }

};

export default sessionReducer;
