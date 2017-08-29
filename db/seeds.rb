# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

user_options = {
  username: 'guest',
  name: 'Guest',
  email: 'info@example.com',
  bio: 'Just visiting!',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
}

user1 = User.create(user_options)

Post.destroy_all


post_ids = []

24.times do |n|
  post_options = {
    author_id: user1.id,
    caption: Faker::Lorem.sentence,
    created_at: Faker::Time.backward(365, :all),
    image: File.open("app/assets/images/#{n+1}.jpg")
  }
  p = Post.create(post_options)
  post_ids << p.id

end

Like.destroy_all

posts_to_like = post_ids.dup

10.times do
  like_options = {
    post_id: posts_to_like.pop,
    user_id: user1.id
  }
  l = Like.create(like_options)
end

Comment.destroy_all

50.times do
  comment_options = {
    post_id: post_ids.sample,
    body: Faker::Friends.quote,
    author_id: user1.id
  }
  Comment.create(comment_options)
end
