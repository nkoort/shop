import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProductsTH } from '../Redux/products-reducer'
import { getProductsSelector } from '../Redux/Selectors/productsSelector'
import PreloaderBig from '../utils/Preloader'

let mapStateToProps = (state) => ({
  products: getProductsSelector(state),
})

const preloadHoc = (Component) => {
  const PreloadHoc = (props) => {
    useEffect(() => {
      debugger
      props.getProducts()
    }, [])
    if (props.products[0].hasOwnProperty('main')) {
      return <Component {...props} />
    } else {
      debugger
      return <PreloaderBig />
    }
  }

  return connect(mapStateToProps, { getProducts: getProductsTH })(PreloadHoc)
}

export default preloadHoc
