import users from './users_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users,
});

export default entitiesReducer;
