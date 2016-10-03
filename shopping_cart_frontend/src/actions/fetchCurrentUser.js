import $ from 'jquery'

export default function fetchCurrentUser() {
  const URL = 'http://localhost:3000/api/v1/users'
  return $.ajax({
    url:URL,
    type:"POST"
  }).then( (response) => {
    return {
      type: 'FETCH_CURRENT_USER',
      payload: response
    }
  })
}
