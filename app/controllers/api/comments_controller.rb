class Api::CommentsController < ApplicationController



  def create
    @comment = Comment.new(comment_params)
    @comment.post_id = params[:post_id]
    @comment.author = current_user
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    @comment = Comment.includes(:author).find(params[:id])
    if @comment.author == current_user || @comment.post.author == current_user
      if @comment.destroy
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
