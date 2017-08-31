json.array! @users.each do |user|
  json.username user.username
  json.name user.name
  json.avatarUrl image_path(user.avatar.url(:original))
  json.id user.id
end
