import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_COMPLETE_PROFILE } from '../actions/profile_actions';
import { RECEIVE_CURRENT_USER_POST } from '../actions/post_actions';
import { RECEIVE_NEW_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { merge, values } from 'lodash';

const usersReducer = (state = {}, action) => {
  let newState;
  let currentUser;
  let updatedUser;

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      if (!action.payload) return state;
      const newUser = { [action.payload.username]: action.payload};
      newState = merge({}, state, newUser);
      return newState;

    case RECEIVE_NEW_FOLLOW:
      currentUser = state[action.following.follower];
      currentUser.followeeUsernames.push(action.following.followee);
      newState = merge({}, state, currentUser);
      return newState;

    case REMOVE_FOLLOW:
      currentUser = state[action.following.follower];
      currentUser.followeeUsernames = currentUser.followeeUsernames.filter((username) => {
        return username !== action.following.followee;
      });
      newState = merge({}, state, currentUser);

      return state;

    case RECEIVE_CURRENT_USER_POST:
      currentUser = state[action.payload.authorName];
      currentUser.profileFeed.unshift(action.payload.id);
      newState = merge({}, state, currentUser);
      return newState;

    case RECEIVE_COMPLETE_PROFILE:
      const additionalUser = { [action.payload.user.username]: action.payload.user };
      newState = merge({}, state, additionalUser);
      return newState;

    default:
      return state;
  }

};

export default usersReducer;
