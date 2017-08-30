Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :comments, only: [:destroy]
    resource :user, only: [:create, :show]
    resources :users, only: [:update] do
      member do
        post 'follow'
        delete 'unfollow'
      end
      collection do
        get 'search'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :destroy, :show] do
      resources :comments, only: [:create]
      member do
        post 'like'
        delete 'unlike'
      end
    end
  end

  root "static_pages#root"

end
