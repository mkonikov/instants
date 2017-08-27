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
    if params[:username]
      @user = User.includes(:followees, :followers).find_by(username: params[:username])

      @posts = @user.posts.order(created_at: :desc)
      @followers = @user.followers
      @followees = @user.followees

      render :profile
    end
  end

  def follow
    @following = Following.new(
      followee_id: params[:id],
      follower_id: current_user.id
    )
    if @following.save
      render json: {followee: @following.followee.username,
        follower: current_user.username}, status: 200
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def unfollow
    @following = Following.find_by(followee_id: params[:id])

    if @following.delete
      render json: {followee: @following.followee.username,
        follower: current_user.username}, status: 200
    else
      render json: @following.errors.full_messages, status: 400
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :bio, :name, :password)
  end

end
