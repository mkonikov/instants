export const fetchCompleteProfile = (username) => {
  debugger
  return $.ajax({
    method: 'get',
    url: `/api/user?username=${username}`,
  });
};
