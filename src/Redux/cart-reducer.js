import { authAPI } from '../api/firebase/firebase'

const ADD_PRODUCT = 'cart/ADD_PRODUCT'

let initialState = {
  //   null: {
  //     id: 0,
  //     price: '',
  //     category: '',
  //     name: '',
  //     count: null,
  //   },
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.product.id]: action.product,
      }
    default:
      return state
  }
}

const addAC = (product) => ({
  type: ADD_PRODUCT,
  product,
})

export const addToCartTH = (product) => async (dispatch) => {
  debugger
  //   console.log(product)
  dispatch(addAC(product))
}

export default cartReducer
