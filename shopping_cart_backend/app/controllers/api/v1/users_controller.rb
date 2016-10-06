module Api
  module V1
    class UsersController < ApplicationController

      def create
        @current_user = User.create
        render json: @current_user
      end

      def update
        current_user = User.all.find_by(id: params["id"].to_i)
        title = title = params["product"].keys[0]
        quantity = params["quantity"].to_i

        ##The update action updates a users list of products (their cart)
        ## the Cart model is a joins table between user and products (many to many relationship)
        ## the update controller action checks the type of cart update
        ## do we want to remove an item or simply add an item to the cart and how many times?

        if params["type"] == "add"
          quantity.times do
            Cart.new.update_cart(params["type"], current_user, title)
          end
        else
          Cart.new.update_cart(params["type"], current_user, title)
          ##update_cart then creates the new association between the user and the product
          ## or removes the product from the user cart, and then the prepare_cart
          ## method queries the user's products and prepares them in more clear format format
          ##the front end to receive
        end

        cart = Cart.new.prepare_cart(current_user)

        render json: cart
      end


    end
  end
end
