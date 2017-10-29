class Api::UsersController < ApplicationController

  skip_before_action :ensure_logged_in, only: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if current_user == @user && @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    if params[:username]
      @user = User
        .includes(:followees, :followers, :posts, posts: [:author, :likes, comments: [:author]])
        .find_by(username: params[:username])

      @posts = @user.posts
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
    @following = Following.find_by(
      followee_id: params[:id],
      follower_id: current_user.id
    )

    if @following.destroy
      render json: {followee: @following.followee.username,
        follower: current_user.username}, status: 200
    else
      render json: @following.errors.full_messages, status: 400
    end

  end

  def search
    if params[:suggestions] == "new_user"
      @users = User.new_user_suggestions

      return render :search
    end

    query = params[:user].downcase
    @users = User
      .where("(lower(username) LIKE :query) OR (lower(name) LIKE :query)", query: "#{query}%")

    render :search
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :bio, :name, :password, :avatar)
  end

end
