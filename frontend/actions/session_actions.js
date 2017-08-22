import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_LOGIN_ERROR = "RECEIVE_LOGIN_ERROR";
export const RECEIVE_SIGNUP_ERROR = "RECEIVE_SIGNUP_ERROR";

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(
      (user) => {
        dispatch(receiveUser(user));
      },
      (error) => {
        dispatch(receiveLoginError(error));
      }
    );
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(
      (user) => {
        dispatch(receiveUser(user));
      },
      (error) => {
        dispatch(receiveSignupError(error));
      }
    );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout(user)
    .then(
      (user) => {
        dispatch(receiveUser(null));
      });
};

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const receiveLoginError = (error) => ({
  type: RECEIVE_LOGIN_ERROR,
  error,
});

export const receiveSignupError = (error) => ({
  type: RECEIVE_SIGNUP_ERROR,
  error,
});
