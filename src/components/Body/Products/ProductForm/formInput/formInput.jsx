import { useState } from 'react';
import s from './formInput.module.css';


export const InputControl = ({ formik, meta }) => {
   const { element = 'input', id = '0', type = 'text', blockName = 'Name', disabled = false, option = {} } = meta;
   const options = Object.keys(option).map(key => <option key={key} value={key}>{option[key]}</option>)
   return (
      <div className={s.block}>
         <div className={s.nameBlock}>{blockName}</div>
         <div className={s.inputBlock}>

            {element === 'input' &&
               <input
                  id={id}
                  name={id}
                  type={type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[id]}
                  placeholder={blockName}
                  className={s.input}
                  disabled={disabled}
               />
            }
            {element === 'select' &&

               <select className={s.select}
                  id={id}
                  name={id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[id]}
                  disabled={disabled}
               >
                  {options}
               </select>
            }
            {formik.errors[id] && formik.touched[id] ? <div className={s.error}>{formik.errors[id]}</div> : null}
         </div>
      </div>
   );
};
export const ProductCardInputs = ({ formik, meta }) => {
   const logoEdit = 'https://w7.pngwing.com/pngs/766/581/png-transparent-computer-icons-editing-others.png';
   const logoDelete = 'https://www.freeiconspng.com/thumbs/remove-icon-png/delete-dust-bin-erase-eraser-remove-icon-1.png';
   const { handleChange, values } = formik;
   const { product, id, keyName, updateField, deleteField, containter } = meta;
   let [editMode, modeChange] = useState(true);
   const editModeV = () => {
      editMode ? modeChange(false) : modeChange(true);
   }
   const changeBlur = () => {
      let data = formik.values[containter]
      debugger;
      let a = Object.keys(data)
      let b = data;
      updateField(id, data, containter);
   }

   // debugger
   return (
      <div className={s.block}>
         <div className={s.name}>
            <div>{keyName}</div>
         </div>
         <div className={s.value}>
            <input
               onBlur={changeBlur}
               onChange={handleChange}
               autoFocus={true}
               type="text"
               name={containter + '.' + keyName}
               id={containter + '.' + keyName}
               value={values[containter][keyName]}
               disabled={editMode} />
            {keyName !== 'id' &&
               <div className={s.buttons}>
                  <img className={s.editLogo} onClick={editModeV} src={logoEdit} alt="" />
                  {containter !== 'main' && <img className={s.deletLogo} onClick={() => deleteField(id, keyName, values, containter)} src={logoDelete} />}
               </div>
            }
         </div>
      </div>
   )

};



