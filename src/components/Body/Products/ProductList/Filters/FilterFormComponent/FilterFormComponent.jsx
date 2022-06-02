
import s from './FilterFormComponent.module.css';
import { Field, reduxForm } from 'redux-form';
// import {}

const FilterFormComponent = (props) => {
   return (
      <div>
         <form onSubmit={props.handleSubmit}>
            <div className={s.formInpets}>
               <div className={s.inputSection}>
                  <div className={s.inputSectionField}>
                     <Field component={'select'} name={'category'} >
                        <option>Computer</option>
                        <option>Phone</option>
                        <option>Auto</option>
                     </Field>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}



const FilterFormComponentContainer = reduxForm({
   form: 'filterForm',
})(FilterFormComponent)

export default FilterFormComponentContainer;
