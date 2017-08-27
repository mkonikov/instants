profileIds = []
followerIds = []
followeeIds = []

@posts.each do |post|
  profileIds << post.id
end

@followers.each do |follower|
  followerIds << follower.id
end

@followees.each do |followee|
  followeeIds << followee.id
end


json.user do
  json.partial! 'api/users/user', user: @user
  json.profileFeed profileIds
  json.followerIds followerIds
  json.followeeIds followeeIds
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end
