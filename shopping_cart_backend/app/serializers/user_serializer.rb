class UserSerializer < ActiveModel::Serializer
  attributes :id, :products, :carts
  has_many :carts
  has_many :products, through: :carts
end
