followerUsernames = []
followeeUsernames = []

followers.to_a.each do |follower|
  followerUsernames << follower.username
end

followees.each do |followee|
  followeeUsernames << followee.username
end

json.followerUsernames followerUsernames
json.followeeUsernames followeeUsernames
