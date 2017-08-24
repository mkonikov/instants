profileIds = []

@posts.each do |post|
  profileIds << post.id
end


json.user do
  json.partial! 'api/users/user', user: @user
  json.profileFeed profileIds
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end
