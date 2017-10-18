require 'rails_helper'

RSpec.describe Post, type: :model do

  describe 'Validations' do
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:image) }
  end

  describe 'Associations' do
    it { should belong_to(:author) }
    it { should have_many(:likes).dependent(:destroy) }
    it { should have_many(:comments).dependent(:destroy) }
  end

end
