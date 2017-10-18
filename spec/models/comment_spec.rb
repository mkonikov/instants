require 'rails_helper'

RSpec.describe Comment, type: :model do

  describe 'Validations' do
    it { should validate_presence_of(:post) }
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:body) }
  end

  describe 'Associations' do
    it { should belong_to(:post) }
    it { should belong_to(:author) }
  end

end
