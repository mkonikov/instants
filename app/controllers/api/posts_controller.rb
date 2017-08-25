class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def create
    @post = Post.create(post_params)
    @post.author_id = current_user.id
    @post_author = current_user

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def show
    @post = Post.includes(:author).find(params[:id])
    @post_author = @post.author
  end

  private

  def post_params
    params.require(:post).permit(:caption, :image)
  end

end
