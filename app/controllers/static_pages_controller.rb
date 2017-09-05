class StaticPagesController < ApplicationController

  skip_before_action :ensure_logged_in

  def root
  end
end
