Rails.application.routes.draw do
  namespace :api do
     namespace :v1 do
        resources :products
        resources :carts
        resources :users

         post '/users/:id', to: 'users#update'
      end
  end
end
