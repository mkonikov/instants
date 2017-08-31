import { TOGGLE_UPLOAD, TOGGLE_LOADING } from '../actions/ui_actions';
import { RECEIVE_FEED, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_SEARCH_USERS_RESULT,  CLEAR_SEARCH_USERS_RESULT,
  RECEIVE_NEW_USER_SUGGESTIONS, CLEAR_USER_SUGGESTIONS } from '../actions/search_actions';
import { merge, values } from 'lodash';

const initialState = {
  uploadModal: false,
  loading: false,
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case TOGGLE_UPLOAD:
      newState = Object.assign({}, state);
      newState.uploadModal = !state.uploadModal;
      return newState;

    case RECEIVE_NEW_USER_SUGGESTIONS:
      newState = Object.assign({}, state, { userSuggestions: [] });
      action.users.forEach(user => newState.userSuggestions.push(user.username));
      return newState;

    case TOGGLE_LOADING:
      newState = Object.assign({}, state);
      newState.loading = !state.loading;
      return newState;

    case RECEIVE_SEARCH_USERS_RESULT:
      newState = Object.assign({}, state);
      newState.usersSearchResult = [];
      action.users.forEach(user => newState.usersSearchResult.push(user.username));
      return newState;

    case CLEAR_USER_SUGGESTIONS:
      newState = Object.assign({}, state);
      newState.userSuggestions = [];
      return newState;

    case CLEAR_SEARCH_USERS_RESULT:
      newState = Object.assign({}, state);
      newState.usersSearchResult = [];
      return newState;

    case RECEIVE_FEED:
      const feedOrd = {feedOrd: action.payload.feedOrd};
      newState = Object.assign({}, state, feedOrd);
      return newState;

    case REMOVE_POST:
      newState = Object.assign({}, state);
      newState.feedOrd = newState.feedOrd || [];
      newState.feedOrd = newState.feedOrd.filter((id) => {
        return id !== action.payload.post.id;
      });
      return newState;

    default:
      return state;
  }
};

export default uiReducer;
