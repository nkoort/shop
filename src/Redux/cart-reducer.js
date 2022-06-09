import { cartAPI } from '../api/firebase/firebase'

const ADD_PRODUCT = 'cart/ADD_PRODUCT'
const CLEAR_CART = 'cart/CLEAR_CART'

let initialState = {}

const cartReducer = (state = initialState, action) => {
  //   debugger
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.product.id]: action.product,
      }
    case CLEAR_CART:
      return initialState
    default:
      return state
  }
}

const addAC = (product) => ({
  type: ADD_PRODUCT,
  product,
})
export const clearAC = () => ({
  type: CLEAR_CART,
})

export const addToCartTH = (product) => async (dispatch) => {
  debugger
  await cartAPI.addToCart(product)
  dispatch(addAC(product))
}

export const getCartTH = (userId) => async (dispatch) => {
  let data = await cartAPI.getCart(userId)
  const result = Object.keys(data).map((res) => {
    dispatch(addAC(data[res]))
  })
}
export const clearTH = () => (dispatch) => {
  //   debugger
  dispatch(clearAC())
}

export default cartReducer
