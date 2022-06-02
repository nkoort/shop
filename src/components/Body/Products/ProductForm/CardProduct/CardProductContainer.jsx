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


   const delField = (id, keyName, newProduct) => {
      !del ? delChange(true) : delChange(false);
      deleteField(id, keyName, newProduct)
      delete newProduct[keyName]
      addNewProduct(newProduct)

   }
   const formik = useFormik({
      initialValues: {
         id: product.id,
         name: product.name,
         category: product.category,
      },
      // validate: values => {
      // },
      onSubmit: values => {
      },
   });
   let productField = Object.keys(formik.values).map(key => <ProductCardInputs key={key} formik={formik} meta={{ product: product, keyName: key, id: product.id, updateField: updateField, deleteField: delField, }} />)
   return (
      <div className={s.form}>

         <form onSubmit={formik.handleSubmit}>
            {productField}

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
