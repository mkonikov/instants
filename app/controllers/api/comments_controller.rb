class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    @comment = Comment.includes(:author).find(params[:id])
    if @comment.delete
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  private

  def comment_params
    params.permit(:comment).permit(:body)
  end
end
