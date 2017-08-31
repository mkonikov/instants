json.extract! user, :username, :email, :bio, :name, :id

if user.avatar.url == "default_avatar.svg"
  json.avatarUrl image_path('default_avatar.svg')
else
  json.avatarUrl user.avatar.url(:original)
end
