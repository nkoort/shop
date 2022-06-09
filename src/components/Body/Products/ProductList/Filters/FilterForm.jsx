import { getProductsTH } from '../../../../../Redux/products-reducer';
import { getProductsSelector } from '../../../../../Redux/Selectors/productsSelector';
import { InputControl } from '../../ProductForm/formInput/formInput';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useFormikContext, withFormik, Formik, Form, Field } from 'formik';

import s from './FilterForm.module.css';

let optionObj = {
   '': '',
   'phone': 'Phone',
   'computer': 'Computer',
   'auto': 'Auto'
}

const FilterFormContainer = (props) => {


   useEffect(() => {
      if (props.values !== props.values['']) {
         props.getProducts(props.values)
      }

      // debugger
   }, [props.values])

   const options = Object.keys(optionObj).map(key => {
      return <option value={key}>{optionObj[key]}</option>
   })

   return (
      <div className={s.addDoc}>
         <Formik initialValues={{}} >
            <Form>
               <Field as="select" name="category" onChange={props.handleChange}>
                  {options}
               </Field>
               <Field as="select" name="group" onChange={props.handleChange}>
                  <option value=''></option>
                  <option value='electronics'>Electronics</option>
                  <option value='cars'>Cars</option>
               </Field>
            </Form>
         </Formik>
      </div>
   )
}
const FilterWithFormik = withFormik({
   mapPropsToValues: () => ({}),
   displayName: 'filters',
})(FilterFormContainer)
export default FilterWithFormik
