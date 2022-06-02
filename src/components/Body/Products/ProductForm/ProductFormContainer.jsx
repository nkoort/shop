import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProdSelector } from '../../../../Redux/Selectors/productsSelector';
import { addNewProductTH, getProductTH } from './../../../../Redux/products-reducer';
import s from './ProductForm.module.css';
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { reqField } from '../../../../utils/validators/validators';
import { InputControl } from './formInput/formInput';
import { useMatch } from 'react-router-dom';
import CardProductContainer from './CardProduct/CardProductContainer';
import PreloaderBig from '../../../../utils/Preloader';

const ProductFormContainer = (props) => {
   return (
      <div>
         <div className={s.createNewDoc}>
            <ProductAddDoc
               product={props.product}
               addNewProduct={props.addNewProduct}
               getProduct={props.getProduct} />
         </div>
      </div>
   )
}
let mapStateToProps = (state) => ({ product: getProdSelector(state) })
export default compose(connect(
   mapStateToProps,
   { getProduct: getProductTH, addNewProduct: addNewProductTH }),
)(ProductFormContainer);

///////////////////////////////////////////////////////////////////////////////////
//          PRODUCT ADD DOCUMENT COMPONENT
//////////////////////////////////////////////////////////////////////////////////

let optionObj = {
   '': '',
   'phone': 'Phone',
   'computer': 'Computer',
   'auto': 'Auto'
}

const { v4: uuidv4 } = require('uuid');

const ProductAddDoc = (props) => {
   const match = useMatch('editproduct/:productID');
   const [status, statusChange] = useState('add');
   console.log(status)
   let idProdF = () => {
      if (true) {
         let idNew = uuidv4(10);
         formik.setValues({ id: idNew })
      }
   }
   // if (match === null) {
   //    statusChange('get');
   //    if (status != 'add') {
   //       statusChange('get');
   //    };
   // };
   useEffect(() => {
      idProdF()
      if (match != null) {
         // debugger;
         props.getProduct(match.params.productID)
         statusChange('preloader');
         setTimeout(() => {
            statusChange('get')
         }, 500);
      }
   }, []);

   const formik = useFormik({
      initialValues: {
         id: '',
         name: '',
         category: '',
      },
      validate: values => {
         let f = formik.errors;

         if (values.name) {
            delete f.name
         } else {
            let errorName = reqField(values.name);
            f.name = errorName
         }
         if (values.category) {
            delete f.category
         } else {
            let errorCategory = reqField(values.category);
            f.category = errorCategory
         }
      },
      onSubmit: values => {
         let a = props.addNewProduct(values, values.id)
         statusChange('preloader');
         setTimeout(() => {
            statusChange('get')
         }, 500);
      },
   });

   return (
      <div className={s.form}>
         <div className={s.title}>Карточка редактирования продукта</div>
         {status === 'add' &&
            <div className={s.addDoc}>
               <form onSubmit={formik.handleSubmit}>
                  <InputControl formik={formik} meta={{ blockName: 'ID продукта', element: 'input', type: 'text', id: 'id', disabled: true }} />
                  <InputControl formik={formik} meta={{ blockName: 'Название продукта', element: 'input', type: 'text', id: 'name' }} />
                  <InputControl formik={formik} meta={{ blockName: 'Категория', element: 'select', option: optionObj, id: 'category' }} />
                  <button type="submit">Submit</button>
               </form>
            </div>
         }
         {status === 'preloader' && <PreloaderBig />}
         {status === 'get' && <CardProductContainer />}
      </div>
   )
}












