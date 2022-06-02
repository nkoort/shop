
import s from './AddProductForm.module.css';
import { Field, reduxForm } from 'redux-form';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const AddProductForm = (props) => {
   // debugger
   return (
      <div>
         <form >
            <div className={s.formInpets}>
               <div className={s.inputSection}>
                  <div className={s.inputSectionName}>Название продукта:</div>
                  <div className={s.inputSectionField}><Field component={'input'} name={'name'} /></div>
               </div>
               <div className={s.inputSection}>
                  <div className={s.inputSectionName}>Вес:</div>
                  <div className={s.inputSectionField}><Field component={'input'} name={'weigth'} /></div>
               </div>
               <div className={s.inputSection}>
                  <div className={s.inputSectionName}>Категория:</div>
                  <div className={s.inputSectionField}>
                     <Field component={'select'} name={'category'} >
                        <option>Computer</option>
                        <option>Phone</option>
                        <option>Auto</option>
                     </Field>
                  </div>
               </div>
               <div className={s.inputSection}>
                  <div className={s.inputSectionName}>Группа:</div>
                  <div className={s.inputSectionField}>
                     <Field component={'select'} name={'group'} >
                        <option>Нужно указать группу</option>
                        <option>Apple</option>
                        <option>Sumsung</option>
                        <option>Xiaomi</option>
                     </Field>
                  </div>
               </div>
               <div className={s.inputSection}>
                  <div className={s.inputSectionName}>Цена:</div>
                  <div className={s.inputSectionField}><Field component={'input'} name={'price'} /></div>
               </div>
               <div className={s.inputSection}>
                  <div className={s.inputSectionName}>Описание:</div>
                  <div className={s.inputSectionField}><Field component={'textarea'} name={'description'} /></div>
               </div>
            </div>

            <div>
               <button onClick={props.handleSubmit}>Сохранить</button>
            </div>

         </form>
      </div>
   )
}



const AddProductFormContainer = reduxForm({
   form: 'AddProduct',
})(AddProductForm)

export default AddProductFormContainer;
