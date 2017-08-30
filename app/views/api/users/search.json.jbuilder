json.array! @users.each do |user|
  json.userName user.username
  json.name user.name
  json.avatarUrl image_path(user.avatar.url(:thumb))
end
