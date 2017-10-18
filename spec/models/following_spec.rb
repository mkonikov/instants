require 'rails_helper'

RSpec.describe Following, type: :model do

  describe 'Validations' do
    it { should validate_presence_of(:followee_id) }
    it { should validate_presence_of(:follower_id) }
  end

  describe 'Associations' do
    it { should belong_to(:follower) }
    it { should belong_to(:followee) }
  end

end
