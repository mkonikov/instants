# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  email               :string           not null
#  bio                 :text
#  name                :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ApplicationRecord

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
  validates :name, :username, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 8, allow_nil: true }

  before_destroy :delete_avatar


  has_attached_file :avatar, default_url: "default_avatar.svg",
    styles: { original: "150x150#" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :follower_followings,
    foreign_key: :followee_id,
    class_name: :Following,
    dependent: :destroy

  has_many :followers,
    through: :follower_followings,
    source: :follower

  has_many :followee_followings,
    foreign_key: :follower_id,
    class_name: :Following,
    dependent: :destroy

  has_many :followees,
    through: :followee_followings,
    source: :followee

  has_many :posts,
    -> { order(:created_at => :desc) },
    foreign_key: :author_id,
    dependent: :destroy

  has_many :likes,
    dependent: :destroy

  has_many :comments,
    dependent: :destroy,
    foreign_key: :author_id

  def self.new_user_suggestions
    User
      .joins(:follower_followings)
      .group(:id)
      .order("COUNT(users.id) DESC")
      .limit(10)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    return user if user && user.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  private

  def delete_avatar
    self.avatar = nil
  end

end
