import users from './users_reducer';
import posts from './posts_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users,
  posts,
});

export default entitiesReducer;
