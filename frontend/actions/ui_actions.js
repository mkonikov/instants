export const TOGGLE_UPLOAD = "TOGGLE_UPLOAD";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const toggleUpload = () => ({
  type: TOGGLE_UPLOAD,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
});
