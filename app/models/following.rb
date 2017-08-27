# == Schema Information
#
# Table name: followings
#
#  id          :integer          not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Following < ApplicationRecord

  validates :followee_id, :follower_id, presence: true
  validates :followee_id, uniqueness: { scope: :follower_id }
  validate :cannot_follow_self

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee,
    foreign_key: :followee_id,
    class_name: :User

  private

  def cannot_follow_self
    errors.add(:followee_id, 'You cannot follow yourself.') if follower_id == followee_id
  end


end
