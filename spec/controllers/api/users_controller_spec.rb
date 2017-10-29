require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  let(:john) { User.create!(username: "john_doe", name: "John Doe", password: "password!", email: "john@test.com") }
  let(:sarah) { User.create!(username: "sarah", name: "Sarah", password: "password!", email: "sarah@test.com") }

  describe "POST #create" do
    context "with invalid params" do

      it "validates that the password is at least 8 characters long" do
        post :create, params: { user: { username: "john_doe", name: "John Doe", password: "short", email: "john@test.com"} }
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do

      it "responds with users information" do
        post :create, format: :json, params: { user: { username: "john_doe", name: "John Doe", password: "password!", email: "john@test.com"} }
        expect(response).to render_template("users/show")
      end
    end

  end

  describe "PATCH #update" do

    before do
        allow(controller).to receive(:current_user) { john }
    end

    context "when logged in as different user" do
      it "should not allow user to update a different user's info" do
        patch :update, format: :json, params: { id: sarah, user: { username: "sarah_two", name: "Sarah Two"} }
        expect(response).to have_http_status(422)
      end

    end

    context "when logged in as current user" do
      it "responds with users updated information" do
        patch :update, format: :json, params: { id: john, user: { username: "jane_doe", name: "Jane Doe"} }
        expect(response).to render_template("users/show")
      end
    end
  end

end
