
import s from './CartMenu.module.css';

import { connect } from 'react-redux';
import { compose } from 'redux';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';



const CartMenuContainer = (props) => {
   return (
      <div>
         <CartMenu />
      </div>
   )
}
let mapStateToProps = (state) => ({})
export default compose(connect(mapStateToProps,
   {}),
)(CartMenuContainer);


const CartMenu = (props) => {

   return (
      <div>
         <NavLink to='/bucket'>
            BUCKET LINK
         </NavLink>
      </div>
   )
}
