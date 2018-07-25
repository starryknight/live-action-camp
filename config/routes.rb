Rails.application.routes.draw do
  namespace :api do
    resources :tribes do
      resources :characters
      end
    end
   resources :users do
    resources :characters
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

