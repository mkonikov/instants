import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_USERS_RESULT = "RECEIVE_SEARCH_USERS_RESULT";
export const CLEAR_SEARCH_USERS_RESULT = "CLEAR_SEARCH_USERS_RESULT";


export const searchUsers = query => dispatch => {
  return SearchAPIUtil.searchUsers(query)
    .then(
      (users) => {
        dispatch(receiveSearchUsersResult(users));
      }
    );
};

export const receiveSearchUsersResult = (users) => ({
  type: RECEIVE_SEARCH_USERS_RESULT,
  users,
});

export const clearSearchUsersResult = (users) => ({
  type: CLEAR_SEARCH_USERS_RESULT,
  users,
});
