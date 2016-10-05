class CartSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :user_id
  belongs_to :product
  belongs_to :user
end
