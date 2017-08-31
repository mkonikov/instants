import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_USERS_RESULT = "RECEIVE_SEARCH_USERS_RESULT";
export const RECEIVE_NEW_USER_SUGGESTIONS = "RECEIVE_NEW_USER_SUGGESTIONS";
export const CLEAR_SEARCH_USERS_RESULT = "CLEAR_SEARCH_USERS_RESULT";
export const CLEAR_USER_SUGGESTIONS = "CLEAR_USER_SUGGESTIONS";

export const searchUsers = query => dispatch => {
  return SearchAPIUtil.searchUsers(query)
    .then(
      (users) => {
        dispatch(receiveSearchUsersResult(users));
      }
    );
};

export const fetchNewUserSuggestions = () => dispatch => {
  return SearchAPIUtil.fetchNewUserSuggestions()
    .then(
      (users) => {
        dispatch(receiveNewUserSuggestions(users));
      }
    );
};

export const receiveNewUserSuggestions = (users) => ({
  type: RECEIVE_NEW_USER_SUGGESTIONS,
  users,
});

export const clearUserSuggestions = () => ({
  type: CLEAR_USER_SUGGESTIONS,
});

export const receiveSearchUsersResult = (users) => ({
  type: RECEIVE_SEARCH_USERS_RESULT,
  users,
});

export const clearSearchUsersResult = () => ({
  type: CLEAR_SEARCH_USERS_RESULT,
});


fetchNewUserSuggestions
