import s from './ProductList.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProductsTH, getProductTH } from '../../../../Redux/products-reducer';
import FilterForm from './Filters/FilterForm';
import { useState, useEffect } from 'react';
import { getProductsSelector } from '../../../../Redux/Selectors/productsSelector';
import { NavLink } from 'react-router-dom';
import Preloader from '../../../Common/Preloader/preloader';



const ContentContainer = (props) => {
   let [filterCategory, filterChange] = useState(props.category)
   let onChange = (formData) => {
      let category = formData.category ? formData.category : 'Phone';
      filterChange(category)
   }
   useEffect(() => {
      props.getProducts();
      props.getProduct('kill')

   }, [])
   let cards = Object.keys(props.products).map(p => {
      return <ProductList key={props.products[p].id} product={props.products[p]} />
   })
   // debugger;
   return (
      <div>
         <div className={s.filters}>
            <FilterForm onChange={onChange} />
         </div>
         <div className={s.productCards}>
            {cards}
         </div>
      </div>
   )
}
let mapStateToProps = (state) => ({
   products: getProductsSelector(state)
})
export default compose(
   connect(mapStateToProps, { getProducts: getProductsTH, getProduct: getProductTH, }),
)(ContentContainer);

//////////////////////////////////////////////////////////////////////////////////////////
//             PRODUCT LIST COMPONET
/////////////////////////////////////////////////////////////////////////////////////////


const ProductList = (props) => {
   // debugger;
   let b = Object.keys(props.product).length

   let infoList = ''
   if (props || b !== 0) {
      infoList = Object.keys(props.product).map(key => {
         return <div className={s.infoList}>
            <span className={s.infoName}>{key}</span>
            <span className={s.infoValue}>{props.product[key]}</span>
         </div>
      })
   }



   if (!props || b === 0) {
      return <Preloader />
   } else {
      return (
         <div className={s.productItem}>
            <div className={s.name}>
               <NavLink to={'product/' + props.product.id}> {props.product.name} </NavLink>
            </div>
            <div>
               <div className={s.info}>INFO:</div>
               {infoList}
            </div>
         </div>
      )
   }
};

