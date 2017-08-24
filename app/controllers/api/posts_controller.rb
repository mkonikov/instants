class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

end
