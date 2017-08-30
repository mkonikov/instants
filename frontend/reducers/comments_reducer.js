import { RECEIVE_COMPLETE_PROFILE } from '../actions/profile_actions';
import { RECEIVE_FEED,
  RECEIVE_COMPLETE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_COMMENT,
  REMOVE_COMMENT } from '../actions/comment_actions';



const commentsReducer = (state = {}, action) => {
  let newState;
  let newComment;
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_COMPLETE_PROFILE:
      newState = Object.assign({}, state, action.payload.comments);
      return newState;

    case RECEIVE_COMMENT:
      newComment = {[action.comment.id]: action.comment};
      newState = Object.assign({}, state, newComment);
      return newState;

    case RECEIVE_COMPLETE_POST:
      newState = Object.assign({}, state, action.payload.comments);
      return newState;

    case REMOVE_POST:
      newState = Object.assign({}, state);
      if (action.payload.comments) {
        const deletedCommentIds = Object.keys(action.payload.comments);
        deletedCommentIds.forEach((commentId) => {
          delete newState[commentId];
        });
      }
      return newState;

    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.comment.id];
      return newState;

    case RECEIVE_FEED:
      newState = Object.assign({}, state, action.payload.comments);
      return newState;

    default:
      return state;

  }
};

export default commentsReducer;
