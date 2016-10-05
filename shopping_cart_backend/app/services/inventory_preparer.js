
  class PrepareInventory

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

  end
