Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show]
    resources :users, only: [] do
      member do
        post 'follow'
        delete 'unfollow'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :destroy, :show] do
      member do
        post 'like'
        delete 'unlike'
      end
    end
  end

  root "static_pages#root"

end
