Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :destroy, :show]
  end

  root "static_pages#root"

end
