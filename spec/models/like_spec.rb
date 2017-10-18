require 'rails_helper'

RSpec.describe Like, type: :model do

  describe 'Validations' do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:post) }
  end

  describe 'Associations' do
    it { should belong_to(:user) }
    it { should belong_to(:post) }
  end

end
