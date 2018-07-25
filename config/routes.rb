Rails.application.routes.draw do
  namespace :api do

    resources :users do
      resources :characters
      end
    
   resources :tribes do
    resources :characters
    end
  end
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

