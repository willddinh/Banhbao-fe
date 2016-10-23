// actions.js
import { CALL_API } from './api'
import cookie from 'react-cookie';
import _ from 'lodash';


export const ADD_BOOK_LIST_PARAM = 'ADD_BOOK_LIST_PARAM'

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

export const PAYMENT_CONFIRM_REQUEST = 'PAYMENT_CONFIRM_REQUEST'
export const PAYMENT_CONFIRM_SUCCESS = 'PAYMENT_CONFIRM_SUCCESS'
export const PAYMENT_CONFIRM_FAILURE = 'PAYMENT_CONFIRM_FAILURE'

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST'
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS'
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE'

export const CART_REQUEST = 'CART_REQUEST'
export const CART_SUCCESS = 'CART_SUCCESS'
export const CART_FAILURE = 'CART_FAILURE'

export const BOOK_LIST_REQUEST = 'BOOK_LIST_REQUEST'
export const BOOK_LIST_SUCCESS = 'BOOK_LIST_SUCCESS'
export const BOOK_LIST_FAILURE = 'BOOK_LIST_FAILURE'

export const SESSION_REQUEST = "SESSION_REQUEST"
export const SESSION_SUCCESS = 'SESSION_SUCCESS'
export const SESSION_FAILURE = 'SESSION_FAILURE'

export const USER_BALANCE_REQUEST = "USER_BALANCE_REQUEST"
export const USER_BALANCE_SUCCESS = 'USER_BALANCE_SUCCESS'
export const USER_BALANCE_FAILURE = 'USER_BALANCE_FAILURE'

export const DUMP_USER_REQUEST = "DUMP_USER_REQUEST"
export const DUMP_USER_SUCCESS = 'DUMP_USER_SUCCESS'
export const DUMP_USER_FAILURE = 'DUMP_USER_FAILURE'

export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST"
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS'
export const SIGN_UP_USER_FAILURE = 'SIGN_UP_USER_FAILURE'

export const DELETE_CART_REQUEST = 'DELETE_CART_REQUEST'
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS'
export const DELETE_CART_FAILURE = 'DELETE_CART_FAILURE'




export function fetchDeleteCart() {
  return {
    [CALL_API]: {
      endpoint: 'cart/deleteCartItem',
      authenticated: true,
      types: [DELETE_CART_REQUEST, DELETE_CART_SUCCESS, DELETE_CART_FAILURE],
      method: "POST"
    }
  }
}

export function fetchSignupUser(creds) {
  return {
    [CALL_API]: {
      method: "POST",
      endpoint: 'signup',
      types: [SIGN_UP_USER_REQUEST, SIGN_UP_USER_SUCCESS, SIGN_UP_USER_FAILURE],
      body: creds
    }
  }
}

export function fetchUserInfo() {
  return {
    [CALL_API]: {
      authenticated: true,
      endpoint: 'dump',
      types: [DUMP_USER_REQUEST, DUMP_USER_SUCCESS, DUMP_USER_FAILURE]
    }
  }
}



export function fetchUserBalance(id) {
  return {
    [CALL_API]: {
      authenticated: true,
      method: "POST",
      endpoint: 'balance/info',
      types: [USER_BALANCE_REQUEST, USER_BALANCE_SUCCESS, USER_BALANCE_FAILURE]
    }
  }
}


export function sessionRequest() {
  return {
    [CALL_API]: {
      method: "POST",
      endpoint: 'app/session',
      types: [SESSION_REQUEST, SESSION_SUCCESS, SESSION_FAILURE]
    }
  }

}


export function fetchBook(id) {
  return {
    [CALL_API]: {
      endpoint: 'book/detail/'+id,
      types: [BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_DETAIL_FAILURE]
    }
  }
}



export function fetchBookList(builder) {
  if (builder === undefined)
    builder = "";
  else {
    builder = JSON.parse(builder);
    builder = encodeQueryData(builder);
    builder = "?"+builder;
  }
  return {
    [CALL_API]: {
      endpoint: 'book/list'+builder,
      types: [BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE]
    }
  }
}

function encodeQueryData(data) {
   let ret = [];
   for (let d in data)
     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
   return ret.join('&');
}

function qs (a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

export function addBookListParam(param){
  return {
      type: ADD_BOOK_LIST_PARAM,
      param
  }
}

export function fetchBookListById(id) {
  return {
    [CALL_API]: {
      endpoint: 'book/list?categoryId='+id,
      types: [BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE]
    }
  }
}
export function fetchBookListByPriceOrder(id) {
  return {
    [CALL_API]: {
      endpoint: 'book/list?priceOrder='+id,
      types: [BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE]
    }
  }
}

export function fetchBookListByPublisher(id) {
  return {
    [CALL_API]: {
      endpoint: 'book/list?publisherId='+id,
      types: [BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE]
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

export function fetchCart() {
  return {
    [CALL_API]: {
      endpoint: 'cart/cartInfo',
      authenticated: true,
      types: [CART_REQUEST, CART_SUCCESS, CART_FAILURE],
      method: "GET"
    }
  }
}


export function fetchAddToCart(id) {
  return {
    [CALL_API]: {
      authenticated: true,
      endpoint: 'cart/addCartItem?productId='+id,
      types: [ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE],
      method: "POST"
    }
  }
}

export function fetchPaymentConfirmation(body) {
  return {
    [CALL_API]: {
      endpoint: 'payment/confirmPay',
      authenticated: true,
      types: [PAYMENT_CONFIRM_REQUEST, PAYMENT_CONFIRM_SUCCESS, PAYMENT_CONFIRM_FAILURE],
      method: "POST",
      body: body
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
    id_token: user.token
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
    dispatch(requestLogout());
    cookie.remove('id_token', { path: '/' });

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

    return fetch('http://banhbao.io/api/login', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          window.console.log(user);
          dispatch(loginError(user))
          return Promise.reject(user)
        } else {
          // If login was successful, set the token in local storage
          cookie.save('id_token', user.token, { path: '/' });
          dispatch(fetchUserInfo());
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => {})
  }
}
