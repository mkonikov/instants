# == Schema Information
#
# Table name: messages
#
#  id           :integer          not null, primary key
#  author_id    :integer          not null
#  recipient_id :integer          not null
#  body         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Message < ApplicationRecord
  validates :recipient, :author, :body, presence: true

  belongs_to :recipient,
    foreign_key: :recipient_id,
    class_name: :User

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
