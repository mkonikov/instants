class AddAttachmentImageToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.attachment :image, null: false
    end
  end

  def self.down
    remove_attachment :posts, :image
  end
end
