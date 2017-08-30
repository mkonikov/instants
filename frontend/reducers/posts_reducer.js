import { RECEIVE_CURRENT_USER_POST,  RECEIVE_COMPLETE_POST,
  RECEIVE_FEED, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_COMPLETE_PROFILE } from '../actions/profile_actions';
import { RECEIVE_NEW_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newPost;
  let updatedPost;
  let newState;
  let commentId;
  let postId;

  switch (action.type) {
    case RECEIVE_CURRENT_USER_POST:
      newPost = {[action.payload.post.id]: action.payload.post };
      newState = merge({}, state, newPost);
      return newState;

    case RECEIVE_COMMENT:
      commentId = action.comment.id;
      postId = action.comment.postId;
      newState = Object.assign({}, state);
      newState[postId].commentIds.push(commentId);
      return newState;

    case REMOVE_COMMENT:
      commentId = action.comment.id;
      postId = action.comment.postId;
      newState = Object.assign({}, state);
      newState[postId].commentIds = newState[postId].commentIds.filter((id) => {
        return id !== commentId;
      });
      return newState;

    case RECEIVE_NEW_LIKE:
      updatedPost = Object.assign({}, state[action.like]);
      updatedPost.likeCount ++;
      updatedPost.hasLiked = true;
      newState = merge({}, state, {[updatedPost.id]: updatedPost});
      return newState;

    case REMOVE_LIKE:
      updatedPost = Object.assign({}, state[action.like]);
      updatedPost.likeCount -= 1;
      updatedPost.hasLiked = false;
      newState = merge({}, state, {[updatedPost.id]: updatedPost});
      return newState;

    case RECEIVE_COMPLETE_POST:
      newPost = action.payload.post;
      newState = merge({}, state, newPost);
      return newState;

    case RECEIVE_COMPLETE_PROFILE:
      newState = merge({}, state, action.payload.posts);
      return newState;

    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.payload.post.id];
      return newState;

    case RECEIVE_FEED:
      newState = merge({}, state, action.payload.posts);
      return newState;

    default:
      return state;

  }
};

export default postsReducer;
