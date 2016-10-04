Rails.application.routes.draw do
  namespace :api do
     namespace :v1 do
        resources :products
        resources :carts
        resources :users,  :only => [:update, :create, :destroy]

         post '/users/:id', to: 'users#update'
         post '/users/:id/remove_items', to: 'users#remove_items_from_cart'
      end
  end
end
