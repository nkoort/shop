export const getProductsSelector = (state) => {
  return state.products.products
}
export const getProdSelector = (state) => {
  return state.products.thisProduct[0]
}
