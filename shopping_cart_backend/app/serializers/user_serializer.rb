class UserSerializer < ActiveModel::Serializer
  attributes :id
  has_many :carts
  has_many :products, through: :carts
end
