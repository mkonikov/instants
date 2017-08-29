##########################
# POSTS
##########################

print "☠️  Destroying posts... "
Post.destroy_all
puts "✅"
print "📨 Seeding posts... "

post_ids = []

242.times do |n|
  post_options = {
    author_id: users.sample.id,
    caption: Faker::Hipster.sentence,
    created_at: Faker::Time.backward(365, :all),
    image: File.open("app/assets/images/instant-#{n+1}.jpg")
  }
  p = Post.create!(post_options)
  post_ids << p.id

end

puts "✅"
