import { RECEIVE_LOGIN_ERROR, RECEIVE_SIGNUP_ERROR } from '../actions/session_actions';

const initialState = {};

const errorsReducer = (state = initialState, action) => {

  Object.freeze(state);
  let newState;

  switch (action.type) {

    case RECEIVE_LOGIN_ERROR:
      newState = Object.assign({}, state, {login: action.error});
      return newState;

    case RECEIVE_SIGNUP_ERROR:
      newState = Object.assign({}, state, {signup: action.error});
      return newState;

    default:
      return state;
  }

};

export default errorsReducer;
