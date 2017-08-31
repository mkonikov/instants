export const searchUsers = (query) => {
  return $.ajax({
    method: 'get',
    url: `/api/users/search?user=${query}`
  });
};

export const fetchNewUserSuggestions = () => {
  return $.ajax({
    method: 'get',
    url: `/api/users/search/?suggestions=new_user`
  });
};
