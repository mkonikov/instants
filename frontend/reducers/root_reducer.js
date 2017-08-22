import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session,
  entities,
});

export default rootReducer;
