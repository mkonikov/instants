##########################
# USERS
##########################

print "☠️  Destroying users... "
User.destroy_all
puts "✅"
print "👩🏼‍💻 Seeding users... "

user1_options = {
  username: 'guest',
  name: 'Guest',
  email: 'info@gmail.com',
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
  email: 'patrick.harper54@gmail.com',
  bio: 'Lifelong beer buff. Travel trailblazer. Award-winning social media lover. Internet ninja. Devoted reader. Pop culture practitioner.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/patrick.harper.jpg")
}

user4_options = {
  username: 'tanya',
  name: 'Tanya Soto',
  email: 'tanya.soto96@gmail.com',
  bio: 'Friend of animals everywhere. Extreme social media lover. Typical Instants enthusiast. Unapologetic gamer.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/patrick.harper.jpg")
}

user5_options = {
  username: 'sims.eugene',
  name: 'Eugene Sims',
  email: 'eugene.sims78@gmail.com',
  bio: 'Total communicator. Incurable travel ninja. Pop culture geek. Music maven. Amateur beer lover.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/sims.eugene.jpg")
}

user6_options = {
  username: 'jayden',
  name: 'Jayden Moreno',
  email: 'jayden.moreno90@gmail.com',
  bio: 'Award-winning web ninja. Subtly charming organizer. Prone to fits of apathy.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/jayden.jpg")
}

user7_options = {
  username: 'lewis78',
  name: 'Katrina Lewis',
  email: 'katrina.lewis78@gmail.com',
  bio: 'Thinker...Shhh! I\'m thinking 🤔',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/lewis78.jpg")
}

user8_options = {
  username: 'wellsofhappiness',
  name: 'Jessica Wells',
  email: 'jessica.wells22@gmail.com',
  bio: 'Hipster-friendly travel scholar.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/wellsofhappiness.jpg")
}

user9_options = {
  username: 'torres.aiden',
  name: 'Aiden Torres',
  email: 'aiden.torres71@gmail.com',
  bio: 'Hipster-friendly travel scholar.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/torres.aiden.jpg")
}

user10_options = {
  username: 'abigail',
  name: 'Abigail Montgomery',
  email: 'abigail@gmail.com',
  bio: 'Abigail. Need I say more?',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/abigail.jpg")
}

user11_options = {
  username: 'nevaeh',
  name: 'Nevaeh Foster',
  email: 'nevaeh.foster98@gmail.com',
  bio: 'Travel enthusiast 🇺🇸 🇧🇷 🇵🇹',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/nevaeh.jpg")
}

user12_options = {
  username: 'kingsebastian',
  name: 'Sebastian King',
  email: 'sebastian.king78@gmail.com',
  bio: '👑',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/kingsebastian.jpg")
}

user13_options = {
  username: 'martinez',
  name: 'Glen Martinez',
  email: 'glen.martinez87@gmail.com',
  bio: 'Future teen idol. Freelance internet geek.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/martinez.jpg")
}

user14_options = {
  username: 'alberto.wright',
  name: 'Alberto Wright',
  email: 'alberto@gmail.com',
  bio: 'Hardcore trailblazer. Subtly charming.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/alberto.wright.jpg")
}

user15_options = {
  username: 'greg.fleming80',
  name: 'Greg Fleming',
  email: 'greg.fleming80@gmail.com',
  bio: 'Where the cool kids at?',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/greg.fleming80.jpg")
}

user16_options = {
  username: 'clarkster',
  name: 'Brittany Clark',
  email: 'brittany.clark85@gmail.com',
  bio: 'Troublemaker. Freelance food fanatic.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/clarkster.jpg")
}

user17_options = {
  username: 'carrieme',
  name: 'Carrie Chapman',
  email: 'carrie.chapman24@gmail.com',
  bio: 'Social media lover. Incurable Instants addict.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/carrieme.jpg")
}

user17_options = {
  username: 'littleherman',
  name: 'Herman Little',
  email: 'littleherman@gmail.com',
  bio: 'Proud zombie buff.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/littleherman.jpg")
}

user18_options = {
  username: 'bates.diana',
  name: 'Diane Bates',
  email: 'bates.diana@gmail.com',
  bio: 'Troublemaker and Proud 🙏',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/bates.diana.jpg")
}

user19_options = {
  username: 'lopez.dustin',
  name: 'Dustin Lopez',
  email: 'dustin.lopez61@gmail.com',
  bio: 'Don\'t think too hard 🤔',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/lopez.dustin.jpg")
}

user20_options = {
  username: 'douggie',
  name: 'Douglas Mitchelle',
  email: 'douggie@gmail.com',
  bio: 'General travel fanatic ✈️',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/douggie.jpg")
}

user21_options = {
  username: 'xooliviaxo',
  name: 'Olivia Dixon',
  email: 'olivia.dixon97@gmail.com',
  bio: '❤️ 💕',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/xooliviaxo.jpg")
}

user22_options = {
  username: 'zzzonahill',
  name: 'Ivan Hill',
  email: 'ivan.hill51@gmail.com',
  bio: '💤 🏞',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/zzzonahill.jpg")
}

user23_options = {
  username: 'theycallmeisaiah',
  name: 'Isaiah Mendoza',
  email: 'isaiah.mendoza67@gmail.com',
  bio: 'Subtly charming bacon trailblazer. Thinker.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/theycallmeisaiah.jpg")
}

user24_options = {
  username: 'perez69',
  name: 'Samuel Perez',
  email: 'samuel.perez69@gmail.com',
  bio: 'Evil social media evangelist. Pop culture fan.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/perez69.jpg")
}

user24_options = {
  username: 'williedouglas',
  name: 'William Douglas',
  email: 'william.douglas68@gmail.com',
  bio: 'Entrepreneur. Zombie practitioner. Alcohol trailblazer. Bacon specialist. Evil twitter evangelist.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/williedouglas.jpg")
}

user25_options = {
  username: 'mildandawesome',
  name: 'Mildred Duncan',
  email: 'mildred.duncan68@gmail.com',
  bio: 'Author, Environmentalist, Sunshine Addict, Scuba Diver, Attractive 20-something Yogurt Enthusiast. I slapped a chicken once.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/mildandawesome.jpg")
}

user26_options = {
  username: 'harvey',
  name: 'Harvey Hawkins',
  email: 'harvey.hawkins30@gmail.com',
  bio: 'Runner, Consultant, Professional Troublemaker, Avid Gamer, The Housing Bubble. I make up a dream in my head before I go to bed.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/harvey.jpg")
}

user27_options = {
  username: 'same.hunt57',
  name: 'Same Hunt',
  email: 'same.hunt57@gmail.com',
  bio: 'Consultant, Dancer, Television Host, Powerful Multitasker, Mitt Romney\'s Family Dog. I sneak drinks into movie theatres.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/same.hunt57.jpg")
}

user28_options = {
  username: 'roland',
  name: 'Douglas Roland',
  email: 'douglas.boyd90@gmail.com',
  bio: 'Community Volunteer, Curator, Dollar Store Owner, Saviour of Mankind, Vampire Slayer. My life is a green screen.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/boyd.jpg")
}

user29_options = {
  username: 'jack.mcdonalid',
  name: 'Jack Mcdonalid',
  email: 'jack.mcdonalid61@gmail.com',
  bio: 'Extraordinaire, Alcoholic, Political Activist, Strategic Storyteller, Dong Lord. The fastest way to a man\'s heart is through the chest cavity.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/jack.mcdonalid.jpg")
}

user30_options = {
  username: 'simmonsdaisy',
  name: 'Daisy Simmmons',
  email: 'daisy.simmmons14@gmail.com',
  bio: 'Consultant, Snowboarder, Chihuahua Lover, Career Educator, Bunny Destroyer. Born at a very young age.',
  session_token: SecureRandom.urlsafe_base64,
  password_digest: BCrypt::Password.create('password'),
  avatar: File.open("app/assets/images/simmonsdaisy.jpg")
}



SEED_USERS = [User.create!(user1_options), User.create!(user2_options),
  User.create!(user3_options), User.create!(user4_options),
  User.create!(user5_options), User.create!(user6_options),
  User.create!(user7_options), User.create!(user8_options),
  User.create!(user9_options), User.create!(user10_options),
  User.create!(user11_options), User.create!(user12_options),
  User.create!(user13_options), User.create!(user14_options),
  User.create!(user15_options), User.create!(user16_options),
  User.create!(user17_options),
  User.create!(user18_options),
  User.create!(user19_options),
  User.create!(user20_options),
  User.create!(user21_options),
  User.create!(user22_options),
  User.create!(user23_options),
  User.create!(user24_options),
  User.create!(user25_options),
  User.create!(user26_options),
  User.create!(user27_options),
  User.create!(user28_options),
  User.create!(user29_options),
  User.create!(user30_options)
]

puts "✅"
