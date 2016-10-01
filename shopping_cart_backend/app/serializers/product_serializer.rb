class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title , :quantity, :price, :selected

end
