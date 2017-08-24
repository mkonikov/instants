export const fetchCompleteProfile = (username) => {
  return $.ajax({
    method: 'get',
    url: `/api/user?username=${username}`,
  });
};
