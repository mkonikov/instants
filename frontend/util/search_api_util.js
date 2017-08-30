export const searchUsers = (query) => {
  return $.ajax({
    method: 'get',
    url: `/api/users/search?user=${query}`
  });
};
