import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import Product from "./Product";
import { useMatch, NavLink } from 'react-router-dom';
import { getProductTH } from "../../../../Redux/products-reducer";
import Preloader from '../../../Common//Preloader/preloader';
import { getProdSelector } from "../../../../Redux/Selectors/productsSelector";

const ProductContainer = (props) => {
   const [status, statusChange] = useState(false);
   let match = useMatch('/product-list/product/:idProduct');
   // debugger;

   useEffect(() => {
      let id = match.params.idProduct;
      props.getProduct(id);
      // debugger;
   }, [])


   if (!props.product) {
      return <Preloader />
   } else {
      return (
         <div>
            product
            <div>{props.product.id}</div>
            <div>{props.product.name}</div>
            <div>{props.product.category}</div>
            <div><NavLink to={`/editproduct/${props.product.id}`}>Edit product</NavLink></div>
            <div></div>
         </div>
      )
   }


}


let mapStateToProps = (state) => ({
   product: getProdSelector(state)
})


export default compose(
   connect(mapStateToProps, { getProduct: getProductTH }),

)(ProductContainer);

