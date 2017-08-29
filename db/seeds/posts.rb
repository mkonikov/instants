##########################
# POSTS
##########################

print "☠️  Destroying posts... "
Post.destroy_all
puts "✅"
print "📨 Seeding posts... "

SEED_POST_IDS = []

242.times do |n|
  post_options = {
    author_id: SEED_USERS.sample.id,
    caption: Faker::Hipster.sentence,
    created_at: Faker::Time.backward(365, :all),
    image: File.open("app/assets/images/instant-#{n+1}.jpg")
  }
  p = Post.create!(post_options)
  SEED_POST_IDS << p.id

end

puts "✅"
