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

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee,
    foreign_key: :followee_id,
    class_name: :User

end
