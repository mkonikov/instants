import {
  RECEIVE_LOGIN_ERROR,
  RECEIVE_SIGNUP_ERROR,
  RECEIVE_USER,
  CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_UPLOAD_ERROR } from '../actions/post_actions';

const initialState = {};

const errorsReducer = (state = initialState, action) => {

  Object.freeze(state);
  let newState;

  switch (action.type) {

    case RECEIVE_LOGIN_ERROR:
      newState = Object.assign({}, state, {login: action.payload});
      return newState;

    case RECEIVE_USER:
      return initialState;

    case RECEIVE_UPLOAD_ERROR:
      newState = Object.assign({}, state, {upload: action.payload});
      return newState;

    case CLEAR_ERRORS:
      return initialState;

    case RECEIVE_SIGNUP_ERROR:
      newState = Object.assign({}, state, {signup: action.payload});
      return newState;

    default:
      return state;
  }

};

export default errorsReducer;
