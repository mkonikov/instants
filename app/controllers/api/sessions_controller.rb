class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    @user ? login(@user) : render :json ["Invalid Credentials"], status: 401
    end
  end

  def destroy
    logout
  end
end
