require 'rails_helper'

RSpec.describe Api::PostsController, type: :controller do
  let(:john_doe) { User.create!(email: 'john@test.com', name: 'John Doe', username: 'john_doe', password: 'abcdefgh') }

  describe "POST #create" do

    before do
      allow(controller).to receive(:current_user) { john_doe }
    end

    context "with invalid params" do
      it "validates the presence of image" do
        post :create, params: { post: {caption: "this is an invalid post"} }
        expect(response).to have_http_status(422)
        expect(response.content_type).to eq("application/json")
      end
    end

    context "with valid params" do

      before :each do
        @file = fixture_file_upload('files/sample-post.jpg', 'image/jpeg')
      end

      it "responds with users information" do
        file = Hash.new
        file['image'] = @file
        post :create, format: :json, params: { post: {image: @file, caption: "this is a valid post"} }
        expect(response).to have_http_status(200)
      end
    end

  end
end
