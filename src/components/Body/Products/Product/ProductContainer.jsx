import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useMatch } from 'react-router-dom';
import { getProductTH } from "../../../../Redux/products-reducer";
import { getProdSelector } from "../../../../Redux/Selectors/productsSelector";
import ProductCard from "./ProductCard/ProductCard";
import PreloaderBig from "../../../../utils/Preloader";

const ProductContainer = (props) => {
   const [status, statusChange] = useState(false);
   let match = useMatch('/product-list/product/:idProduct');

   useEffect(() => {
      let id = match.params.idProduct;
      props.getProduct(id);
   }, [])


   if (props.product.hasOwnProperty('main')) {
      return (
         <div>
            <ProductCard product={props.product} />
         </div>
      )
   } else {
      return <PreloaderBig />
   }


}


let mapStateToProps = (state) => ({
   product: getProdSelector(state)
})
export default compose(connect(mapStateToProps, { getProduct: getProductTH }),)(ProductContainer);


