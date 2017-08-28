class Api::PostsController < ApplicationController

  def index
    @posts = Post
      .includes(:author, :likes, :comments)
      .where(author: current_user.followees.to_a.concat([current_user]))
      .order("posts.created_at DESC")

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
    @post = Post.includes(:author, :likes).find(params[:id])
    @post_author = @post.author
  end

  def like
    @like = Like.new(
      post_id: params[:id],
      user_id: current_user.id
    )
    if @like.save
      render json: @like.post_id, status: 200
    else
      render json: @like.errors.full_messages, status: 400
    end
  end

  def unlike
    @like = Like.find_by(post_id: params[:id])

    if @like.delete
      render json: @like.post_id, status: 200
    else
      render json: @like.errors.full_messages, status: 400
    end

  end

  private

  def post_params
    params.require(:post).permit(:caption, :image)
  end

end
