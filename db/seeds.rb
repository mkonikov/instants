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


24.times do |n|
  post_options = {
    author_id: user1.id,
    caption: Faker::Lorem.sentence,
    created_at: Faker::Time.backward(365, :all),
    image: File.open("app/assets/images/#{n+1}.jpg")
  }
  Post.create(post_options)

end
