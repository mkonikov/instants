class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    debugger
    if params[:username]
      @user = User.find_by(username: params[:username])
      @posts = @user.posts
      render :profile
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :bio, :name, :password)
  end

end
