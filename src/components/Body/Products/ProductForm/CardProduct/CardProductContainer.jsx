import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNewProductTH, deleteFieldTH, getProductTH, updateDocTH } from '../../../../../Redux/products-reducer';
import { getProdSelector } from '../../../../../Redux/Selectors/productsSelector';
import { useEffect, useState } from 'react'
import s from './CardProduct.module.css';
import { useFormik } from 'formik';
import { ProductCardInputs } from '../formInput/formInput';
import AddFieldContainer from './AddField/AddFieldContainer';


const CardProductContainer = (props) => {
   return (
      <div>
         <CardProduct
            product={props.product}
            updateField={props.updateField}
            deleteField={props.deleteField}
            addNewProduct={props.addNewProduct} />
      </div>
   )
}
let mapStateToProps = (state) => ({
   product: getProdSelector(state)
})
export default compose(
   connect(mapStateToProps, {
      getProduct: getProductTH,
      updateField: updateDocTH,
      deleteField: deleteFieldTH,
      addNewProduct: addNewProductTH,
   }),
)(CardProductContainer);


///////////////////////////////////////////////////////////////////////////////////
//          PRODUCT CARD COMPONENT
//////////////////////////////////////////////////////////////////////////////////


const CardProduct = ({ product, updateField, deleteField, addNewProduct }) => {
   const [del, delChange] = useState(false);
   useEffect(() => {
      formik.setValues(product);
   }, [product]);


   const delField = (id, keyName, newProduct, container) => {
      debugger;
      !del ? delChange(true) : delChange(false);
      deleteField(id, keyName, container)
      let a = [newProduct] + '.' + [container] + '.' + [keyName]
      delete newProduct[container][keyName]
      addNewProduct(newProduct)

   }

   const formik = useFormik({
      initialValues: {
         main: {
            id: product.main.id,
            name: product.main.name,
            category: product.main.category,
         },
         info: {
            onherFields: '',
         }

      },
      // validate: values => {
      // },
      onSubmit: values => {
      },
   });
   // debugger;
   let productFieldMain = Object.keys(formik.values.main).map(key => <ProductCardInputs key={key} formik={formik} meta={{ containter: 'main', product: product.main, keyName: key, id: product.main.id, updateField: updateField, deleteField: delField, }} />)
   let productFieldOther = Object.keys(formik.values.info).map(key => <ProductCardInputs containter={'info'} key={key} formik={formik} meta={{ containter: 'info', product: product.info, keyName: key, id: product.main.id, updateField: updateField, deleteField: delField, }} />)
   return (
      <div className={s.form}>

         <form onSubmit={formik.handleSubmit}>
            <div>MAIN INFO</div>
            {productFieldMain}
            <div>OTHER INFO</div>
            {productFieldOther}
            <div className={s.saveButton}>
               <button type="submit">Save</button>
            </div>

         </form>
         <div className={s.addFieldBlock}>
            <AddFieldContainer />
         </div>
      </div>
   )
}
