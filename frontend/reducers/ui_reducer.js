import { TOGGLE_UPLOAD } from '../actions/ui_actions';
import { merge } from 'lodash';

const initialState = {
  uploadModal: false,
};



const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case TOGGLE_UPLOAD:
      newState = Object.assign({}, state);
      newState.uploadModal = !state.uploadModal;
      return newState;
      
    default:
      return state;
  }
};

export default uiReducer;
