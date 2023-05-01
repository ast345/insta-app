require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq' if Rails.env.development?
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "articles#index"

  resource :profile, only: [:show, :edit, :update]

  resources :articles

  resources :accounts, only: [:show] do
    resources :follows, only: [:create, :show]
    resources :unfollows, only: [:create]
    resources :followers, only: [:index]
    resources :followings, only: [:index]
  end
  
  resource :timeline, only: [:show]

  namespace :api ,defaults: {format: :json} do
    scope '/articles/:article_id' do
      resource :like, only: [:create, :destroy, :show]
      resources :comments, only: [:index, :new, :create]
    end
  end
end
