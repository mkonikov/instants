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
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/patsy.morales.jpg")
}

user3_options = {
  username: 'patrickharper',
  name: 'Patrick Harper',
  email: 'patrick.harper54@example.com',
  bio: 'Lifelong beer buff. Travel trailblazer. Award-winning social media lover. Internet ninja. Devoted reader. Pop culture practitioner.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/patrick.harper.jpg")
}

user4_options = {
  username: 'tanya',
  name: 'Tanya Soto',
  email: 'tanya.soto96@example.com',
  bio: 'Friend of animals everywhere. Extreme social media lover. Typical Instants enthusiast. Unapologetic gamer.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/patrick.harper.jpg")
}

user5_options = {
  username: 'sims.eugene',
  name: 'Eugene Sims',
  email: 'eugene.sims78@example.com',
  bio: 'Total communicator. Incurable travel ninja. Pop culture geek. Music maven. Amateur beer lover.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/sims.eugene.jpg")
}

user6_options = {
  username: 'jayden',
  name: 'Jayden Moreno',
  email: 'jayden.moreno90@example.com',
  bio: 'Award-winning web ninja. Subtly charming organizer. Prone to fits of apathy.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/jayden.jpg")
}

user7_options = {
  username: 'lewis78',
  name: 'Katrina Lewis',
  email: 'katrina.lewis78@example.com',
  bio: 'Thinker...Shhh! I\'m thinking 🤔',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/lewis78.jpg")
}

user8_options = {
  username: 'wellsofhappiness',
  name: 'Jessica Wells',
  email: 'jessica.wells22@example.com',
  bio: 'Hipster-friendly travel scholar.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/wellsofhappiness.jpg")
}

user10_options = {
  username: 'abigail',
  name: 'Abigail Montgomeryabig',
  email: 'abigail@example.com',
  bio: 'Abigail. Need I say more?',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/abigail.jpg")
}

user11_options = {
  username: 'nevaeh',
  name: 'Nevaeh Foster',
  email: 'nevaeh.foster98@example.com',
  bio: 'Travel enthusiast 🇺🇸 🇧🇷 🇵🇹',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/nevaeh.jpg")
}

user12_options = {
  username: 'kingsebastian',
  name: 'Sebastian King',
  email: 'sebastian.king78@example.com',
  bio: '👑',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/kingsebastian.jpg")
}

user13_options = {
  username: 'martinez',
  name: 'Glen Martinez',
  email: 'glen.martinez87@example.com',
  bio: 'Future teen idol. Freelance internet geek.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/martinez.jpg")
}

user14_options = {
  username: 'alberto.wright',
  name: 'Alberto Wright',
  email: 'alberto@example.com',
  bio: 'Hardcore trailblazer. Subtly charming.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/alberto.wright.jpg")
}

user15_options = {
  username: 'greg.fleming80',
  name: 'Greg Fleming',
  email: 'greg.fleming80@example.com',
  bio: 'Where the cool kids at?',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/greg.fleming80.jpg")
}

SEED_USERS = [User.create!(user_options), User.create!(user2_options),
  User.create!(user3_options), User.create!(user4_options),
  User.create!(user5_options), User.create!(user6_options),
  User.create!(user7_options), User.create!(user8_options), User.create!(user10_options),
  User.create!(user11_options), User.create!(user12_options),
  User.create!(user13_options), User.create!(user14_options),
  User.create!(user15_options)]

puts "✅"
