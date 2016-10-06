import $ from 'jquery'
export default function removeItemFromCart(productData, currentUser) {
  debugger
  const URL = `http://localhost:3000/api/v1/users/${currentUser.id}`
  return $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({
      product: productData,
        type: "remove",
        quantity: productData[Object.keys(productData)[0]].quantity
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'REMOVE_ITEM_FROM_CART',
      payload: response
    }
  })
}
