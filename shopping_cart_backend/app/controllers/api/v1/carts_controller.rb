require 'pry'
module Api
  module V1
    class CartsController < ApplicationController
      def create
        render json: Product.all
      end

      def show
        @cart = Cart.find_by(id: id)
        render json: @cart
      end

      def update
        @cart = Cart.find_by(id: id)

        render json: @cart
      end

      def destroy
      end

      private

      def cart_params
        params.require(:product).permit(:id, :product_id, :quantity)
      end
    end
  end
end
