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

class Post < ApplicationRecord

  validates :author, :image, presence: true

  has_attached_file :image, styles: { thumb: "293x293#", square: "600x600#" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    dependent: :destroy

end
