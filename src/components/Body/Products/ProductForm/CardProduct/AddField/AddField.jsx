
import { useEffect, useState } from 'react'
import s from './AddField.module.css';
import { useFormik } from 'formik';




const AddField = (props) => {
   const [status, statusChange] = useState(false)

   const resetStatus = () => {
      statusChange(false);
   }
   // debugger
   const formik = useFormik({
      initialValues: {
         name: '',
         value: '',
      },
      // validate: values => {
      // },
      onSubmit: values => {
         // debugger;
         let idProduct = props.product.id;
         props.addNewField(idProduct, values.name, values.value);
         formik.resetForm({ name: '', value: '' });
         statusChange(true);
      },
   });
   return (
      <div className={s.form}>
         {status && <div>Поле добавлено</div>}
         <form onSubmit={formik.handleSubmit}>
            <input type="text" onChange={formik.handleChange} onClick={resetStatus} onname='name' id='name' placeholder='some name' value={formik.values.name} />
            <input type="text" onChange={formik.handleChange} onClick={resetStatus} name='value' id='value' placeholder='some value' value={formik.values.value} />
            <button type="submit">Add field</button>
         </form>
      </div>
   )
}




export default AddField;


