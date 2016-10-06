require 'pry'
module Api
  module V1
    class ProductsController < ApplicationController

      def create

        title = params["product"]["title"]
        price = params["product"]["price"].to_f
        quantity = params["product"]["quantity"].to_i

        ##controller action create adds new products to our DB
        ##quantity specifies how many new instances of the produt we want to create
        ## and add to our DB

        quantity.times do
          @product =  Product.create(title: title, price: price)
        end
        @inventory = Product.new.prepare_inventory
        ##the prepare_inventory methods queries the database and parses the data
        ## in such a way as to have product titles be keys to objects holding quantity and price info

        render json: @inventory
      end

      def index
          @inventory = Product.new.prepare_inventory
          render json: @inventory
      end

      def update
        @product = Product.find_by(product_params["title"])

        render json: @product
      end

      def destroy
      end

      private

      def product_params
        params.require(:product).permit(:title, :quantity, :price)
      end
    end
  end
end
