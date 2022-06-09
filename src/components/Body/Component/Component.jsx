
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { changeAPI, productsAPI } from '../../../api/firebase/firebase';

const Component = (props) => {

   let filters = {
      'category': 'phone',
      'group': 'electronics',
      'price': 500
   }

   let products = productsAPI.getProductsFilter(filters).then(res => {
      debugger
   })
   console.log(products)

   let arr = [true, true, true, false, false, true, false, true]
   let arrTrue = []
   let arrFalse = []
   const newArr = arr.map(a => {
      a == true ? arrTrue.push(true) : arrFalse.push(false)
   })
   console.log(arrTrue)
   console.log(arrFalse)

   return (
      <div className='wapperSCSS'>
         {/* {products} */}
      </div>
   )
}






export default Component;

