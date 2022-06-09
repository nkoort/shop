import { deleteField } from 'firebase/firestore/lite'
import { nanoid } from 'nanoid'
import {
  changeAPI,
  db,
  getUsers,
  postUser,
  productsAPI,
} from '../api/firebase/firebase'
import { isEmpty } from 'lodash'

const ADD_PRODUCT = 'products/ADD_PRODUCT'
const GET_PRODUCTS = 'products/GET_PRODUCTS'
const GET_PRODUCT = 'products/GET_PRODUCT'
const STATUS_LOADING = 'products/STATUS_LOADING'
const ADD_PRODUCT_NEW = 'products/ADD_PRODUCT_NEW'
const ADD_PRODUCT_NEW_FIELD = 'products/ADD_PRODUCT_NEW_FIELD'

let initialState = {
  products: [{}],
  thisProduct: [{}],
  loadingStatus: false,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: { ...state.products, [action.product.id]: action.product },
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      }
    case GET_PRODUCT:
      return {
        ...state,
        thisProduct: [action.product],
      }
    case STATUS_LOADING:
      return {
        ...state,
        loadingStatus: action.status,
      }
    case ADD_PRODUCT_NEW:
      return {
        ...state,
        thisProduct: [action.product],
      }
    case ADD_PRODUCT_NEW_FIELD:
      return {
        ...state,
        thisProduct: [
          {
            ...state.thisProduct[0],
            info: {
              ...state.thisProduct[0].info,
              [action.newFieldName]: action.newFieldValue,
            },
          },
        ],
      }
    default:
      return state
  }
}

//ADD PRODUCT BLOCK (ACTION CREATOR & THUNK)
const addProductAC = (product) => ({
  type: ADD_PRODUCT,
  product,
})

//Санка получает один продукт в виде массива, затем передаёт его в АПИ.
//Если после передачи респонс вернулся с сервера, оно диспатчит его. Если нет, то записывает в стейт
//то значение, которое передано через форму.
//Это нужно для того, что бы не возникало ошибок в случае когда данные с сервера о продуктах
// ещё не получались.
export const addProductTH = (product) => async (dispatch) => {
  let idNew = nanoid(5)
  let newProduct = { ...product, id: idNew }
  let response = await productsAPI.postProduct(db, newProduct)
  dispatch(addProductAC(newProduct))
}

// GET PRODUCTS BLOCK (ACTION CREATOR & THUNK)
const getProductAC = (products) => ({
  type: GET_PRODUCTS,
  products,
})

export const getProductsTH = (filters = '', limitSize) => async (dispatch) => {
  //   debugger
  if (filters.category == '' || isEmpty(filters)) {
    let response = await productsAPI.getProducts(limitSize)
    dispatch(getProductAC(response))
  } else if (!isEmpty(filters) && filters.category !== '') {
    let res = await productsAPI.getProductsFilter(filters, limitSize)
    dispatch(getProductAC(res))
  }
}

//GET 1 PRODUCT FOR PRODUCT PAGE
const getPoductAC = (product) => ({
  type: GET_PRODUCT,
  product,
})

const statusAC = (status) => ({
  type: STATUS_LOADING,
  status,
})
export const getProductTH = (id) => async (dispatch) => {
  if (id === 'kill') {
    dispatch(getPoductAC([{}]))
  } else {
    let response = await productsAPI.getProduct(id)
    dispatch(statusAC(false))
    dispatch(getPoductAC(response))
    if (response) {
      dispatch(statusAC(true))
    }
  }
}

// ADD NEW PRODUCT AND CHANGE

const addNewProductAC = (product) => ({
  type: ADD_PRODUCT_NEW,
  product,
})
const addNewFieldAC = (newFieldName, newFieldValue) => ({
  type: ADD_PRODUCT_NEW_FIELD,
  newFieldName,
  newFieldValue,
})

export const addNewProductTH = (product, id) => async (dispatch) => {
  let productMain = { main: product, info: '' }
  if (!id) {
    dispatch(addNewProductAC(product))
  } else {
    await productsAPI.postProduct(db, productMain, id)
    dispatch(addNewProductAC(productMain))
  }
}

export const addNewFieldTH = (idProduct, newFieldName, newFieldValue) => async (
  dispatch,
) => {
  let newField = {
    ['info.' + newFieldName]: newFieldValue,
  }
  await changeAPI.updateDocument(idProduct, newField)
  dispatch(addNewFieldAC(newFieldName, newFieldValue))
}

export const updateDocTH = (idProduct, fields, containter) => async (
  dispatch,
) => {
  await changeAPI.updateDocument(idProduct, { [containter]: fields })
}
export const deleteFieldTH = (idProduct, deleteField, containter) => async (
  dispatch,
) => {
  let field = [containter] + '.' + [deleteField]
  await changeAPI.delField(idProduct, field)
}

export default productsReducer
