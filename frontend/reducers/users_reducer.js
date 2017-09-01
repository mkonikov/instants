import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_COMPLETE_PROFILE,
  RECEIVE_UPDATED_PROFILE } from '../actions/profile_actions';
import { RECEIVE_CURRENT_USER_POST,
  REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_NEW_FOLLOW,
  REMOVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_SEARCH_USERS_RESULT,
  RECEIVE_NEW_USER_SUGGESTIONS } from '../actions/search_actions';

import { merge, values } from 'lodash';

const usersReducer = (state = {}, action) => {
  let newState;
  let currentUser;
  let updatedUser;
  let followee;
  let follower;
  let existingUser;

  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER:
      if (!action.payload) return state;
      const newUser = { [action.payload.username]: action.payload};
      newState = merge({}, state, newUser);
      return newState;

    case RECEIVE_SEARCH_USERS_RESULT:
    case RECEIVE_NEW_USER_SUGGESTIONS:
      newState = merge({}, state);
      action.users.forEach((user) => {
        existingUser = newState[user.username] || {};
        existingUser.followerUsernames = existingUser.followerUsernames || [];
        updatedUser = merge({}, existingUser, user);
        newState[user.username] = updatedUser;
      });
      return newState;

    case REMOVE_POST:
      const postAuthor = action.payload.post.authorName;
      newState = Object.assign({}, state);
      newState[postAuthor].profileFeed = newState[postAuthor].profileFeed || [];
      newState[postAuthor].profileFeed = newState[postAuthor].profileFeed.filter((postId) => {
        return postId !== action.payload.post.id;
      });
      return newState;

    case RECEIVE_NEW_FOLLOW:
      followee = state[action.following.followee];
      follower = state[action.following.follower];
      followee.followerUsernames = followee.followerUsernames || [];
      follower.followeeUsernames = follower.followeeUsernames || [];
      followee.followerUsernames.push(action.following.follower);
      follower.followeeUsernames.push(action.following.followee);
      newState = merge({}, state, {[followee.username]: followee,
        [follower.username]: follower});
      return newState;

    case REMOVE_FOLLOW:
      followee = state[action.following.followee];
      followee.followerUsernames = followee.followerUsernames.filter((username) => {
        return username !== action.following.follower;
      });
      newState = merge({}, state, {[followee.username]: followee});
      return newState;

    case RECEIVE_CURRENT_USER_POST:
      const newPost = action.payload.post;
      currentUser = state[newPost.authorName];
      currentUser.profileFeed = currentUser.profileFeed || [];
      currentUser.profileFeed.unshift(newPost.id);
      newState = merge({}, state, currentUser);
      return newState;

    case RECEIVE_UPDATED_PROFILE:
      updatedUser = { [action.payload.username]: action.payload };
      newState = merge({}, state, updatedUser);
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
