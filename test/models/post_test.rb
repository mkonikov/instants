# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  caption            :text
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string           not null
#  image_content_type :string           not null
#  image_file_size    :integer          not null
#  image_updated_at   :datetime         not null
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
