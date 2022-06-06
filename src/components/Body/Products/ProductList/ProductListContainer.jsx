import s from './ProductList.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProductsTH } from '../../../../Redux/products-reducer';
import FilterForm from './Filters/FilterForm';
import { useState } from 'react';
import { getProductsSelector } from '../../../../Redux/Selectors/productsSelector';
import preloadHoc from '../../../../hoc/preloaderHoc';
import ProductCard from '../Product/ProductCard/ProductCard';



const ContentContainer = (props) => {
   let [filterCategory, filterChange] = useState(props.category)
   let onChange = (formData) => {
      let category = formData.category ? formData.category : 'Phone';
      filterChange(category)
   }
   // debugger;
   let cards = Object.keys(props.products).map(p => {
      let id = props.products[p].main.id
      return <ProductCard
         key={id}
         product={props.products[p]} />
   })

   return (
      <div>
         <div className={s.filters}>
            <FilterForm onChange={onChange} />
         </div>
         <div>
            Список товаров
         </div>
         <div className={s.productCards}>
            {cards}
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
   preloadHoc,
)(ContentContainer);