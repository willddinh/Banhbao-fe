import { combineReducers } from 'redux';
import cookie from 'react-cookie';
import {
  ADD_BOOK_LIST_PARAM,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE,
  BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_DETAIL_FAILURE,
  PAYMENT_LIST_REQUEST, PAYMENT_LIST_SUCCESS, PAYMENT_LIST_FAILURE,
  PAYMENT_REQUEST_REQUEST, PAYMENT_REQUEST_SUCCESS, PAYMENT_REQUEST_FAILURE,
  PAYMENT_CONFIRM_REQUEST, PAYMENT_CONFIRM_SUCCESS, PAYMENT_CONFIRM_FAILURE,
  ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE,
  CART_REQUEST, CART_SUCCESS, CART_FAILURE,
  BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAILURE,
  USER_BALANCE_REQUEST, USER_BALANCE_SUCCESS, USER_BALANCE_FAILURE,
  DUMP_USER_REQUEST, DUMP_USER_SUCCESS, DUMP_USER_FAILURE,
  SIGN_UP_USER_REQUEST, SIGN_UP_USER_SUCCESS, SIGN_UP_USER_FAILURE,
  SESSION_REQUEST, SESSION_SUCCESS, SESSION_FAILURE,
  DELETE_CART_REQUEST, DELETE_CART_SUCCESS, DELETE_CART_FAILURE
} from './actions'


// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    payUrl: '',
    addToCart: '',
    cart: '',
    bookList:'',
    userBalance:'',
    isFetching: false,
    userInfo: '',
    session: '',
    curPage: 0,
    totalPage: '',
    totalRentPrice: '',
    isEnoughMoney: '',
    totalPrice: '',
    bookListParam: '',
    signUpUser:'',
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
      setTimeout(() => {window.location = "/"},2000);
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
      window.location = action.response.pay_url
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
      alert("Đã đưa thành công vào giỏ hàng");

      return Object.assign({}, state, {
        isFetching: false,
        addToCart: action.response,
        authenticated: action.authenticated || false
      })
    case ADD_TO_CART_FAILURE:
        alert("Có lỗi xẩy ra: "+JSON.stringify(action.error));

      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    case CART_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case CART_SUCCESS:
    let totalRentPrice = 0;
    let totalPrice = 0;
    let isEnoughMoney = false;
    action.response.cart.items.map((item) => {
      totalRentPrice += Number(item.entity.rent_price);
      totalPrice += Number(item.entity.price);
    })
      return Object.assign({}, state, {
        isFetching: false,
        cart: action.response,
        totalRentPrice: totalRentPrice,
        totalPrice: totalPrice,
        authenticated: action.authenticated || false
      })
    case CART_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    case BOOK_LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case BOOK_LIST_SUCCESS:
      let totalPage = [];
      let curPage = 1;
      if (Math.round(action.response.totalItems / action.response.limit) == 0)
        totalPage.push(curPage);
      else {
        curPage = Math.round(action.response.totalItems / action.response.limit)
        if (action.response.totalItems % action.response.limit> 0){
          curPage = curPage+1;
          for(let i=1; i<curPage+1;i++)
            totalPage.push(i)
        }
      }
      return Object.assign({}, state, {
        isFetching: false,
        curPage: action.response.page,
        totalPage: totalPage,
        bookList: action.response,
        authenticated: action.authenticated || false
      })
    case BOOK_LIST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    case USER_BALANCE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case USER_BALANCE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        userBalance: action.response,
        authenticated: action.authenticated || false
      })
    case USER_BALANCE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        userBalance: {result:{main_balance:0}},
        errorMessage: action.message
      })
    case DUMP_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case DUMP_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        userInfo: action.response,
        isAuthenticated: true,
        authenticated: action.authenticated || false
      })
    case DUMP_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case SIGN_UP_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case SIGN_UP_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        signUpUser: action.response,
        authenticated: action.authenticated || false
      })
    case SIGN_UP_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.error
      })

    case SESSION_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case SESSION_SUCCESS:
      cookie.save('session', action.response.session, { path: '/' });
      return Object.assign({}, state, {
        isFetching: false,
        session: action.response.session,
        authenticated: action.authenticated || false
      })
    case SESSION_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    case ADD_BOOK_LIST_PARAM:
      return Object.assign({}, state, {
        isFetching: false,
        bookListParam: action.param
      })
    case DELETE_CART_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case DELETE_CART_SUCCESS:
    alert("Xóa giỏ hàng thành công")
      return Object.assign({}, state, {
        isFetching: false,
        cart: action.response,
        totalRentPrice: 0,
        totalPrice: 0,
        authenticated: action.authenticated || false
      })
    case DELETE_CART_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.error
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
