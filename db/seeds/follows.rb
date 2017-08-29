##########################
# FOLLOWS
##########################

print "☠️  Destroying follows... "
Following.destroy_all
puts "✅"
print "🚶 Seeding follows... "

users.each do |user|
  users_to_follow = users.reject { |u| u.id == user.id }

  rand(1..13).times do
    followee = users_to_follow.pop
    follow_options = {
      followee_id: followee.id,
      follower_id: user.id
    }
    Following.create!(follow_options)
  end
end

puts "✅"
