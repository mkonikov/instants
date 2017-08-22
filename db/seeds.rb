# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

options = {
  username: 'guest',
  name: 'Guest',
  email: 'info@example.com',
  bio: 'Just visiting!',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
}

User.create(options)
