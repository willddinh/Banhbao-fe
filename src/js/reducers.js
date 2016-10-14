import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE,
  BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_DETAIL_FAILURE,
  PAYMENT_LIST_REQUEST, PAYMENT_LIST_SUCCESS, PAYMENT_LIST_FAILURE,
  PAYMENT_REQUEST_REQUEST, PAYMENT_REQUEST_SUCCESS, PAYMENT_REQUEST_FAILURE,
  PAYMENT_CONFIRM_REQUEST, PAYMENT_CONFIRM_SUCCESS, PAYMENT_CONFIRM_FAILURE,
  ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE,
  CART_REQUEST, CART_SUCCESS, CART_FAILURE
} from './actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    payUrl: '',
    addToCart: '',
    cart: '',
    isFetching: false,
    paymentConfirmation: '',
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    case PAYMENT_REQUEST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case PAYMENT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        payUrl: action.response,
        authenticated: action.authenticated || false
      })
    case PAYMENT_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message

      })
    case PAYMENT_CONFIRM_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case PAYMENT_CONFIRM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        paymentConfirmation: action.response,
        authenticated: action.authenticated || false
      })
    case PAYMENT_CONFIRM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case ADD_TO_CART_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ADD_TO_CART_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        addToCart: action.response,
        authenticated: action.authenticated || false
      })
    case ADD_TO_CART_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case CART_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case CART_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        cart: action.response,
        authenticated: action.authenticated || false
      })
    case CART_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })

    default:
      return state
  }
}

// The quotes reducer
function quotes(state = {
    isFetching: false,
    quote: '',
    authenticated: false
  }, action) {
  switch (action.type) {
    case QUOTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case QUOTE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        quote: action.response,
        authenticated: action.authenticated || false
      })
    case QUOTE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
    }
}

function books(state = {
    isFetching: false,
    book: '',
    authenticated: false
  }, action) {
  switch (action.type) {
    case BOOK_DETAIL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case BOOK_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        book: action.response,
        authenticated: action.authenticated || false
      })
    case BOOK_DETAIL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
    }
}
function paymentLists(state = {
    isFetching: false,
    payment: '',
    authenticated: false
  }, action) {
  switch (action.type) {
    case PAYMENT_LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case PAYMENT_LIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        payment: action.response,
        authenticated: action.authenticated || false
      })
    case PAYMENT_LIST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
    }
}

function paymentRequest(state = {
    isFetching: false,
    payUrl: '',
    authenticated: false
  }, action) {
  switch (action.type) {
    case PAYMENT_REQUEST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case PAYMENT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        payUrl: action.response,
        authenticated: action.authenticated || false
      })
    case PAYMENT_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false

      })
    default:
      return state
    }
}


// We combine the reducers here so that they
// can be left split apart above
const banhBaoApp = combineReducers({
  auth,
  paymentLists,
  quotes,
  paymentRequest,
  books
})

export default banhBaoApp
