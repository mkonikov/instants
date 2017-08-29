import users from './users_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users,
  posts,
  comments,
});

export default entitiesReducer;
