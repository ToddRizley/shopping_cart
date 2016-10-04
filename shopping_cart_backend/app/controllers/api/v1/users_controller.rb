module Api
  module V1
    class UsersController < ApplicationController

      def create
        @current_user = User.create
        render json: @current_user
      end

      def update
        @current_user = User.all.find_by(id: params["id"].to_i)
        if params["type"] == "add"
          @current_user.products.push(Product.all.find_by(title: params["product"].keys[0]))
        else
          title = params["product"].keys[0]
          product_id = Product.all.find_by(title: title).id
          Cart.all.each do |prod|
            if prod.product_id == product_id && prod.user_id == @current_user.id
              prod.delete
            end
          end
        end

        def prepare_cart
          product_list = []
          @current_user.products.each do |prod|
              if product_list.detect {|pr| pr.keys[0] == prod["title"] }
                product_list.select {|pr| pr.keys[0] == prod["title"] }[0][prod.title][:quantity] += 1
              else
                n = 1
                product_list.push(prod.title => {quantity: n, price: prod.price})
              end
          end
          product_list
        end
        render json: prepare_cart
      end

  
    end
  end
end
