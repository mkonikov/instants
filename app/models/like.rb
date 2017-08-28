# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

  validates :user, :post, presence: true
  validates :user_id, uniqueness: { scope: :post_id }

  belongs_to :user
  belongs_to :post
  
end
