import s from './ProductList.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProductsTH } from '../../../../Redux/products-reducer';
import FilterForm from './Filters/FilterForm';
import { useState, useEffect } from 'react';
import { getProductsSelector } from '../../../../Redux/Selectors/productsSelector';
import preloadHoc from '../../../../hoc/preloaderHoc';
import ProductCard from '../Product/ProductCard/ProductCard';
import { isEmpty } from 'lodash'


const ContentContainer = (props) => {
   // debugger
   useEffect(() => {
      props.getProducts()
   }, [])
   let cards = ''
   if (!isEmpty(props.products[0])) {
      cards = Object.keys(props.products).map(p => {
         let id = props.products[p].main.id
         return <ProductCard
            key={id}
            product={props.products[p]} />
      })
   }



   return (
      <div>
         <div className={s.filters}>
            <FilterForm getProducts={props.getProducts} />
            {props.products.length}
         </div>

         <div className={s.productCards}>
            {props.products.length >= 1 && cards}
            {props.products.length < 1 && <div>Продукты отсутствуют....</div>}
         </div>
      </div>
   )
}
let mapStateToProps = (state) => ({
   products: getProductsSelector(state),
   cart: state.cart
})
export default compose(
   connect(mapStateToProps, { getProducts: getProductsTH }),
   // preloadHoc,
)(ContentContainer);