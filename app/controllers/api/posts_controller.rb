class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def create
    @post = Post.create(post_params)
    @post.author_id = current_user.id

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def show
    @post = Post.find(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:caption, :image)
  end

end
