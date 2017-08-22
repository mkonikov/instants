import { RECEIVE_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      if (!action.payload) return { user_id: null };
      return { user_id: action.payload.id};

    default:
      return state;
  }

};

export default sessionReducer;
