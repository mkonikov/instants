class Api::SessionsController < ApplicationController

  skip_before_action :ensure_logged_in, only: [:create]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)

      render "api/users/show"
    elsif User.find_by(username: params[:user][:username]).nil?
      render json: ["The username you entered doesn't belong to an
        account. Please check your username and try again."], status: 401
    else
      render json: ["Sorry, your password was incorrect.
        Please double-check your password."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No user signed in"], status: 404
    end

  end
end
