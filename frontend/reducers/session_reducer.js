import { RECEIVE_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      if (!action.payload) return { userId: null };
      return { userId: action.payload.id};

    default:
      return state;
  }

};

export default sessionReducer;
