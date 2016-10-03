require 'pry'
module Api
  module V1
    class ProductsController < ApplicationController

      def create

        title = params["product"]["title"]
        price = params["product"]["price"].to_f
        @product = Product.find_by(title: title)
        if @product
          @product.quantity += 1
        else
          @product =  Product.create(title: title, price: price)
        end

        def prepare_inventory
          product_list = []
          Product.all.each do |prod|
              if product_list.detect {|pr| pr.keys[0] == prod["title"] }
                product_list.select {|pr| pr.keys[0] == prod["title"] }[0][prod.title][:quantity] += 1
              else
                n = 1
                product_list.push(prod.title => {quantity: n, price: prod.price})
              end
          end
          product_list
        end
        render json: prepare_inventory
      end

      def index
        def prepare_inventory
          product_list = []
          Product.all.each do |prod|
              if product_list.detect {|pr| pr.keys[0] == prod["title"] }
                product_list.select {|pr| pr.keys[0] == prod["title"] }[0][prod.title][:quantity] += 1
              else
                n = 1
                product_list.push( prod.title => {quantity: n, price: prod.price})
              end
          end
      
          product_list
        end
        render json: prepare_inventory
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
