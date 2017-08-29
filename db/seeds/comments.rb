##########################
# COMMENTS
##########################

print "☠️  Destroying comments... "
Comment.destroy_all
puts "✅"
print "🗣 Seeding comments... "

1000.times do
  comment_options = {
    post_id: post_ids.sample,
    body: Faker::Hipster.sentence,
    author_id: users.sample.id
  }
  Comment.create!(comment_options)
end

puts "✅"
