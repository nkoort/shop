import s from './ProductList.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProductsTH, getProductTH } from '../../../../Redux/products-reducer';
import FilterForm from './Filters/FilterForm';
import { useState, useEffect } from 'react';
import { getProductsSelector } from '../../../../Redux/Selectors/productsSelector';
import { NavLink } from 'react-router-dom';
import Preloader from '../../../Common/Preloader/preloader';
import ButtonAddContainer from '../buttonAdd/buttonAddContainer';
import preloadHoc from '../../../../hoc/preloaderHoc';



const ContentContainer = (props) => {
   let [filterCategory, filterChange] = useState(props.category)
   let onChange = (formData) => {
      let category = formData.category ? formData.category : 'Phone';
      filterChange(category)
   }
   // useEffect(() => {
   //    props.getProducts();
   // }, [])
   let cards = Object.keys(props.products).map(p => {
      return <ProductList key={props.products[p].main.id} product={props.products[p]} />
   })
   console.log('render')
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
   products: getProductsSelector(state)
})
export default compose(
   connect(mapStateToProps, { getProducts: getProductsTH }),
   preloadHoc,
)(ContentContainer);

//////////////////////////////////////////////////////////////////////////////////////////
//             PRODUCT LIST COMPONET
/////////////////////////////////////////////////////////////////////////////////////////


const ProductList = ({ product }) => {
   const descrProduct = () => {
      return (
         Object.keys(product).map(k1 => {
            let descrList = Object.keys(product[k1]).map((k2, index) => {
               return (
                  <div key={k2} className={s.infoLine}>
                     <div className={s.lineName}>{k2}</div>
                     <div className={s.lineValue}>{product[k1][k2]}</div>
                  </div>
               )
            })
            return (
               <div key={k1}>
                  <div className={s.blockName}>{k1 == 'main' ? 'Основания информация' : 'Дополнительня информация'}</div>
                  {descrList}
               </div>

            )
         })
      )

   }

   return (
      <div className={s.productItem}>
         <div className={s.name}>
            <NavLink to={'product/' + product.main.id}> {product.main.name} </NavLink>
         </div>
         <div>
            <div className={s.info}></div>
            {descrProduct()}
         </div>
         <div>
            <ButtonAddContainer />
         </div>
      </div>
   )
};

