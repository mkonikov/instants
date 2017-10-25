require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe "POST #create" do
    context "with invalid params" do

      it "validates that the password is at least 8 characters long" do
        post :create, params: { user: { username: "john_doe", name: "John Doe", password: "short", email: "john@test.com"} }
        expect(response).to have_http_status(422)
      end
    end

  end

end
