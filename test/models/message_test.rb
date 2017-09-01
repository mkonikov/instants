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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
