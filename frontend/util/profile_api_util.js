export const fetchCompleteProfile = (username) => {
  return $.ajax({
    method: 'get',
    url: `/api/user?username=${username}`,
  });
};

export const updateProfile = (form, userId) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${userId}`,
    data: form,
    contentType: false,
    processData: false,
  });
};
