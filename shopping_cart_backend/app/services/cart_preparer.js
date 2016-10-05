class CartPreparer

      def prepare_cart(current_user)
        product_list = []
        current_user.products.each do |prod|
            if product_list.detect {|pr| pr.keys[0] == prod["title"] }
              product_list.select {|pr| pr.keys[0] == prod["title"] }[0][prod.title][:quantity] += 1
            else
              n = 1
              product_list.push(prod.title => {quantity: n, price: prod.price})
            end
        end
        product_list
      end

      def update_cart(type, current_user, title)
        if type == "add"
          current_user.products.push(Product.all.find_by(title: title))
        else
          product_id = Product.all.find_by(title: title).id
          Cart.all.each do |prod|
            if prod.product_id == product_id && prod.user_id == current_user.id
              prod.delete
            end
          end
        end
      end


  end
