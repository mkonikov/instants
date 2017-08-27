profileIds = []
followerUsernames = []
followeeUsernames = []

@posts.each do |post|
  profileIds << post.id
end

@followers.each do |follower|
  followerUsernames << follower.username
end

@followees.each do |followee|
  followeeUsernames << followee.username
end


json.user do
  json.partial! 'api/users/user', user: @user
  json.profileFeed profileIds
  json.followerUsernames followerUsernames
  json.followeeUsernames followeeUsernames
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end
