import React, { useState, useEffect } from "react";
import { Route, Routes, Router } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Body from './Body';
import Component from './Component/Component';
import ProductAddContainer from '../Body/Products/ProductAdd/ProductAddContainer';
import s from './Body.module.scss';
import ProductListContainer from "./Products/ProductList/ProductListContainer";
import ProductContainer from "./Products/Product/ProductContainer";
import LoginContainer from "./Login/LoginContainer";
import ProductFormContainer from "./Products/ProductForm/ProductFormContainer";

const BodyContainer = (props) => {


   return (
      <div className={s.bodyContainer}>
         <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/1" element={<Component />} />
            <Route path="/2" element={<Component />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/add-product" element={<ProductAddContainer />} />
            <Route path="/product-list" element={<ProductListContainer />} />
            <Route path="/product-list/product/*" element={<ProductContainer />} />
            <Route path="/editproduct/*" element={<ProductFormContainer />} />
         </Routes>
      </div>
   )
}


let mapStateToProps = (state) => ({
})
export default compose(
   connect(mapStateToProps, {}),

)(BodyContainer);

