// actions.js
import { CALL_API } from './api'


// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const QUOTE_REQUEST = 'QUOTE_REQUEST'
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS'
export const QUOTE_FAILURE = 'QUOTE_FAILURE'

export const BOOK_DETAIL_REQUEST = 'BOOK_DETAIL_REQUEST'
export const BOOK_DETAIL_SUCCESS = 'BOOK_DETAIL_SUCCESS'
export const BOOK_DETAIL_FAILURE = 'BOOK_DETAIL_FAILURE'

export const PAYMENT_LIST_REQUEST = 'PAYMENT_LIST_REQUEST'
export const PAYMENT_LIST_SUCCESS = 'PAYMENT_LIST_SUCCESS'
export const PAYMENT_LIST_FAILURE = 'PAYMENT_LIST_FAILURE'

export const PAYMENT_REQUEST_REQUEST = 'PAYMENT_REQUEST_REQUEST'
export const PAYMENT_REQUEST_SUCCESS = 'PAYMENT_REQUEST_SUCCESS'
export const PAYMENT_REQUEST_FAILURE = 'PAYMENT_REQUEST_FAILURE'


export function fetchBook(id) {
  return {
    [CALL_API]: {
      endpoint: 'book/detail/'+id,
      types: [BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_DETAIL_FAILURE]
    }
  }
}

export function fetchPaymentList() {
  return {
    [CALL_API]: {
      endpoint: 'payment/pay-list',
      types: [PAYMENT_LIST_REQUEST, PAYMENT_LIST_SUCCESS, PAYMENT_LIST_FAILURE]
    }
  }
}

export function fetchPaymentRequest(body) {
  return {
    [CALL_API]: {
      endpoint: 'payment/pay',
      authenticated: true,
      types: [PAYMENT_REQUEST_REQUEST, PAYMENT_REQUEST_SUCCESS, PAYMENT_REQUEST_FAILURE],
      method: "POST",
      body: body
    }
  }
}


export function fetchQuote() {
  return {
    [CALL_API]: {
      endpoint: 'random-quote',
      types: [QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE]
    }
  }
}

// Same API middlware is used to get a
// secret quote, but we set authenticated
// to true so that the auth header is sent
export function fetchSecretQuote() {
  return {
    [CALL_API]: {
      endpoint: 'dump',
      authenticated: true,
      types: [QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE]
    }
  }
}



function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}



// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}

export function loginUser(creds) {
let json = {email:creds.username, 
            password:creds.password}
  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(json)
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('http://104.199.175.76:8001/api/login', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          window.console.log(user);
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.token)
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}
