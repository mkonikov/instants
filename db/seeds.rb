##########################
# USERS
##########################

print "☠️  Destroying users... "
User.destroy_all
puts "✅"
print "👩🏼‍💻 Seeding users... "

user_options = {
  username: 'guest',
  name: 'Guest',
  email: 'info@example.com',
  bio: 'Just visiting!',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
}

user2_options = {
  username: 'patsymor',
  name: 'Patsy Morales',
  email: 'patsy.morales17@gmail.com',
  bio: 'Subtly charming pop culture practitioner. Explorer. Proud student. Creator. Food advocate. Organizer.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/patsy.morales.jpg")
}

user3_options = {
  username: 'patrickharper',
  name: 'Patrick Harper',
  email: 'patrick.harper54@example.com',
  bio: 'Lifelong beer buff. Travel trailblazer. Award-winning social media lover. Internet ninja. Devoted reader. Pop culture practitioner.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/patrick.harper.jpg")
}

user4_options = {
  username: 'tanya',
  name: 'Tanya Soto',
  email: 'tanya.soto96@example.com',
  bio: 'Friend of animals everywhere. Extreme social media lover. Typical Instants enthusiast. Unapologetic gamer.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/patrick.harper.jpg")
}

user5_options = {
  username: 'sims.eugene',
  name: 'Eugene Sims',
  email: 'eugene.sims78@example.com',
  bio: 'Total communicator. Incurable travel ninja. Pop culture geek. Music maven. Amateur beer lover.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/sims.eugene.jpg")
}

user6_options = {
  username: 'jayden',
  name: 'Jayden Moreno',
  email: 'jayden.moreno90@example.com',
  bio: 'Award-winning web ninja. Subtly charming organizer. Prone to fits of apathy.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/jayden.jpg")
}

user7_options = {
  username: 'lewis78',
  name: 'Katrina Lewis',
  email: 'katrina.lewis78@example.com',
  bio: 'Thinker...Shhh! I\'m thinking 🤔',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/lewis78.jpg")
}

user8_options = {
  username: 'wellsofhappiness',
  name: 'Jessica Wells',
  email: 'jessica.wells22@example.com',
  bio: 'Hipster-friendly travel scholar.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/wellsofhappiness.jpg")
}

user9_options = {
  username: 'tanya',
  name: 'Tanya Soto',
  email: 'tanya.soto96@example.com',
  bio: 'Friend of animals everywhere. Extreme social media lover. Typical Instants enthusiast. Unapologetic gamer.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/patrick.harper.jpg")
}

user10_options = {
  username: 'abigail',
  name: 'Abigail Montgomeryabig',
  email: 'tanya.soto96@example.com',
  bio: 'Abigail. Need I say more?',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/abigail.jpg")
}

user11_options = {
  username: 'nevaeh',
  name: 'Nevaeh Foster',
  email: 'nevaeh.foster98@example.com',
  bio: 'Travel enthusiast 🇺🇸 🇧🇷 🇵🇹',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/nevaeh.jpg")
}

user12_options = {
  username: 'kingsebastian',
  name: 'Sebastian King',
  email: 'sebastian.king78@example.com',
  bio: '👑',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/kingsebastian.jpg")
}

user13_options = {
  username: 'martinez',
  name: 'Glen Martinez',
  email: 'glen.martinez87@example.com',
  bio: 'Future teen idol. Freelance internet geek.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/martinez.jpg")
}

user14_options = {
  username: 'alberto.wright',
  name: 'Alberto Wright',
  email: 'tanya.soto96@example.com',
  bio: 'Hardcore trailblazer. Subtly charming.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/alberto.wright.jpg")
}

user15_options = {
  username: 'greg.fleming80',
  name: 'Greg Fleming',
  email: 'greg.fleming80@example.com',
  bio: 'Where the cool kids at?',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password')
  avatar: File.open("app/assets/images/greg.fleming80.jpg")
}

users = [User.create(user_options), User.create(user2_options),
  User.create(user3_options), User.create(user4_options),
  User.create(user5_options), User.create(user6_options),
  User.create(user7_options), User.create(user8_options),
  User.create(user9_options), User.create(user10_options),
  User.create(user11_options), User.create(user12_options),
  User.create(user13_options), User.create(user14_options),
  User.create(user15_options)]


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
  p = Post.create(post_options)
  post_ids << p.id

end

##########################
# LIKES
##########################

print "☠️  Destroying likes... "
Like.destroy_all
puts "✅"
print "👍🏼 Seeding likes... "

users.each do |user|
  posts_to_like = post_ids.dup.shuffle!

  60.times do
    like_options = {
      post_id: posts_to_like.pop,
      user_id: user.id
    }
    Like.create(like_options)
  end
end

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
  Comment.create(comment_options)
end
