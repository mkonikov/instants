import { RECEIVE_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {
    
    case RECEIVE_USER:
      return { user_id: [action.user.id]};

    default:
      return state;
  }

};

export default sessionReducer;
