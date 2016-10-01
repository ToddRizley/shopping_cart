module Api
  module V1
    class ProductController < ApplicationController

      def create
        @product =  Product.create(product_params)
        render json: @product
      end

      def index
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
