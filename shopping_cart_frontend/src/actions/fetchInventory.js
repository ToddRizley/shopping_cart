import $ from 'jquery'

export default function fetchInventory() {
  const URL = 'http://localhost:3000/api/v1/products'
  return $.ajax({
    url:URL,
    type:"GET",
    contentType:"application/json; charset=utf-8",
    dataType:"json"
  }).then( (response) => {
    return {
      type: 'FETCH_INVENTORY',
      payload: response
    }
  })
}
