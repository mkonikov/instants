##########################
# COMMENTS
##########################

print "☠️  Destroying comments... "
Comment.destroy_all
puts "✅"
print "🗣 Seeding comments... "

1000.times do
  comment_options = {
    post_id: SEED_POST_IDS.sample,
    body: Faker::Hipster.sentence,
    author_id: SEED_USERS.sample.id
  }
  Comment.create!(comment_options)
end

puts "✅"
