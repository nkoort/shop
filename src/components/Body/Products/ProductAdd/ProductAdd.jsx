import AddProductFormContainer from './AddProductForm/AddProductForm';
import s from './ProductAdd.module.css';
import {useState} from 'react';



const ProductAdd = (props) => {
   const [formStatus, statusChange] = useState(false);

   const productAdd = (formData) => {
      statusChange(true);
      props.addProduct(formData);
   }
   const formSubmit = (formData) => {
      statusChange(false);
      productAdd(formData);
      
   }

   return (
      <div>
         {formStatus && <div>Продукт добавлен</div>}
         <AddProductFormContainer onSubmit={formSubmit}/>
         
      </div>
   );
};



export default ProductAdd;