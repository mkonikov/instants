require 'rails_helper'

RSpec.describe Api::PostsController, :type => :controller do
  let(:john_doe) { User.create!(email: 'john@test.com', name: 'John Doe', username: 'john_doe', password: 'abcdefgh') }

  describe "POST #create" do

    before do
      allow(controller).to receive(:current_user) { john_doe }
    end

    context "with invalid params" do
      it "validates the presence of image" do
        post :create, post: {caption: "this is an invalid post"}
        expect(response).to have_http_status(422)
      end
    end

  end
end
