import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_COMPLETE_PROFILE = "RECEIVE_COMPLETE_PROFILE";

export const fetchCompleteProfile = username => dispatch => {
  return ProfileAPIUtil.fetchCompleteProfile(username)
    .then(
      (profile) => {
        dispatch(receiveCompleteProfile(profile));
      }
      // (error) => {
      //   dispatch(receive####Error(error.responseJSON));
      // }
    );
};


export const receiveCompleteProfile = (profile) => ({
  type: RECEIVE_COMPLETE_PROFILE,
  payload: profile,
});
