
import s from './FilterForm.module.css';
import FilterFormComponentContainer from './FilterFormComponent/FilterFormComponent';

const FilterForm = (props) => {

   return (
      <div>
         <FilterFormComponentContainer initialValues={props.category} onChange={props.onChange}/>
      </div>
   )
}






export default FilterForm;