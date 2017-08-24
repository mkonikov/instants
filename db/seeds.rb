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

post_options = {
  author_id: user1.id,
  image: File.open('app/assets/images/brian.jpeg')
}

Post.create(post_options)
