import { TOGGLE_UPLOAD,
  RECEIVE_ERRORS, TOGGLE_LOADING } from '../actions/ui_actions';
import { RECEIVE_FEED } from '../actions/post_actions';
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

    case TOGGLE_LOADING:
      newState = Object.assign({}, state);
      newState.loading = !state.loading;
      return newState;

    case RECEIVE_ERRORS:
      const errors = action.errors;
      newState = Object.assign({}, state, {errors});
      return newState;

    case RECEIVE_FEED:
      const feedOrd = {feedOrd: action.payload.feedOrd};
      newState = Object.assign({}, state, feedOrd);
      return newState;

    default:
      return state;
  }
};

export default uiReducer;
