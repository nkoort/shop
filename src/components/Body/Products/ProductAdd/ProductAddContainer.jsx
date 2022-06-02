import React, { useStatus, useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addProductTH } from "../../../../Redux/products-reducer";
import { getProductsSelector, setProducts } from "../../../../Redux/Selectors/productsSelector";
import ProductAdd from "./ProductAdd";


const ProductAddContainer = (props) => {
   return (
      <div>
         <ProductAdd products={props.products} addProduct={props.addProduct} />
      </div>
   )
}


let mapStateToProps = (state) => ({
   products: getProductsSelector(state)
})


export default compose(
   connect(mapStateToProps, { addProduct: addProductTH }),

)(ProductAddContainer);

