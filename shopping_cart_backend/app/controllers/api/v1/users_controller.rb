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
        Services::PrepareCart.new.update_cart(params["type"], current_user, title)
        cart = Services::PrepareCart.new.prepare_cart(current_user)

        render json: cart
      end


    end
  end
end
