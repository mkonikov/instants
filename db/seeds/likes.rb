##########################
# LIKES
##########################

print "☠️  Destroying likes... "
Like.destroy_all
puts "✅"
print "👍🏼 Seeding likes... "

SEED_USERS.each do |user|
  posts_to_like = SEED_POST_IDS.dup.shuffle!

  60.times do
    like_options = {
      post_id: posts_to_like.pop,
      user_id: user.id
    }
    Like.create!(like_options)
  end
end

puts "✅"
