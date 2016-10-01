class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :quantity
end
