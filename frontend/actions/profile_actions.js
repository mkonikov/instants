import * as ProfileAPIUtil from '../util/profile_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_COMPLETE_PROFILE = "RECEIVE_COMPLETE_PROFILE";
export const RECEIVE_UPDATED_PROFILE = "RECEIVE_UPDATED_PROFILE";

export const fetchCompleteProfile = username => dispatch => {
  return ProfileAPIUtil.fetchCompleteProfile(username)
    .then(
      (profile) => {
        dispatch(receiveCompleteProfile(profile));
      }
    );
};

export const updateProfilePic = (form, userId) => dispatch => {
  return ProfileAPIUtil.updateProfilePic(form, userId)
    .then(
      (profile) => {
        dispatch(receiveUpdatedProfile(profile));
      }
    );
};

export const updateProfileDetails = (data) => dispatch => {
  return ProfileAPIUtil.updateProfileDetails(data)
    .then(
      (profile) => {
        dispatch(receiveUpdatedProfile(profile));
      }, (error) => {
        dispatch(receiveErrors(error.responseJSON));
      }
    );
};

export const receiveCompleteProfile = (profile) => ({
  type: RECEIVE_COMPLETE_PROFILE,
  payload: profile,
});

export const receiveUpdatedProfile = (profile) => ({
  type: RECEIVE_UPDATED_PROFILE,
  payload: profile,
});
