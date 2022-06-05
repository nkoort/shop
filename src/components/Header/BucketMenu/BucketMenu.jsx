
import s from './BucketMenu.module.css';

import { connect } from 'react-redux';
import { compose } from 'redux';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import BucketContainer from '../../Body/Bucket/BucketContainer';


const BucketMenuContainer = (props) => {
   return (
      <div>
         <BucketMenu />
      </div>
   )
}
let mapStateToProps = (state) => ({})
export default compose(connect(mapStateToProps,
   {}),
)(BucketMenuContainer);


const BucketMenu = (props) => {

   return (
      <div>
         <NavLink to='/bucket'>
            BUCKET LINK
         </NavLink>
      </div>
   )
}
