const BASE_URL = 'http://banhbao.io/api/'

function callApi(endpoint, authenticated, method, body) {
  let token = localStorage.getItem('id_token') || null
  let config = {}

  if(authenticated) {
    if(token) {
      config = {
        headers: { 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
        }
      }
    }
    else {
      throw "No token saved!"
    }
    if(method) {
      config.method = `${method}`;
    }
    if(body) {
      config.body = `${body}`;
    }

  }

  return fetch(BASE_URL + endpoint, config)
    .then(response => 
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json
    })
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {

  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, types, authenticated, method, body } = callAPI

  const [ requestType, successType, errorType ] = types

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, authenticated, method, body).then(
    response =>
      next({
        response,
        authenticated,
        type: successType,
        method,
        body
      }),
    error => 
    next({
      error: error.message || 'There was an error.',
      type: errorType
    })
  )
}
