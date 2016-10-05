import $ from 'jquery'
export default function addToShoppingCart(productData, currentUser) {
  const URL = `http://localhost:3000/api/v1/users/${currentUser.id}`
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      product: productData,
      type: "add"
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'ADD_TO_SHOPPING_CART',
      payload: response
    }
  })
}
