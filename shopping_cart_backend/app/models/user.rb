class User < ApplicationRecord
  has_many :carts
  has_many :products, through: :carts
end
