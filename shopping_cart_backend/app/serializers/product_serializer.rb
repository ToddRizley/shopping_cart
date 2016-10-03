class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :price
  has_many :carts
  has_many :users, through: :carts
end
