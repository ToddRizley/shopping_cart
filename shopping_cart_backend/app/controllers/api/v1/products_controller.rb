require 'pry'
module Api
  module V1
    class ProductsController < ApplicationController

      def create
        title = params["product"]["title"]
        price = params["product"]["price"].to_f
        quantity = params["product"]["quantity"].to_i
        @product = Product.find_by(title: title)
        if @product
          @product.quantity += quantity
        else
          @product =  Product.create(title: title, price: price, quantity: quantity)
        end
        binding.pry
        render json: @product
      end

      def index
        binding.pry
        render json: Product.all
      end

      def update
        @product = Product.find_by(product_params["title"])

        render json: @product
      end

      def destroy
      end

      private

      def product_params
        params.require(:product).permit(:title, :quantity, :selected, :price)
      end
    end
  end
end
