export const TOGGLE_UPLOAD = "TOGGLE_UPLOAD";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const toggleUpload = () => ({
  type: TOGGLE_UPLOAD,
});

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
});
