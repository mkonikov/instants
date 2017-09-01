class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.integer :recipient_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :messages, :author_id
    add_index :messages, :recipient_id
  end
end
