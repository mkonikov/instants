export const fetchCompleteProfile = (username) => {
  return $.ajax({
    method: 'get',
    url: `/api/user?username=${username}`,
  });
};

export const updateProfilePic = (form, userId) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${userId}`,
    data: form,
    contentType: false,
    processData: false,
  });
};

export const updateProfileDetails = (user) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user.userId}`,
    data: {user},
  });
};
