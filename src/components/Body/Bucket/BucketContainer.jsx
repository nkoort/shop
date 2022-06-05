import s from './Bucket.module.css';

import { connect } from 'react-redux';
import { compose } from 'redux';
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { useMatch } from 'react-router-dom';

const BucketContainer = (props) => {
   return (
      <div>
         <Bucket />
      </div>
   )
}
let mapStateToProps = (state) => ({})
export default compose(connect(
   mapStateToProps,
   {}),
)(BucketContainer);

///////////////////////////////////////////////////////////////////////////////////
//          BUCKET COMPONENT
//////////////////////////////////////////////////////////////////////////////////

const Bucket = (props) => {


   return (
      <div className={s.bucketBlock}>
         BUCKET
      </div>
   )
}












