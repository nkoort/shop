import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNewFieldTH } from '../../../../../../Redux/products-reducer';
import { getProdSelector } from '../../../../../../Redux/Selectors/productsSelector';
import { setProduct } from '../../../../../../Redux/Selectors/selectors';
import AddField from './AddField';

const AddFieldContainer = (props) => {

   // debugger;

   return (
      <div>
         <AddField product={props.product} addNewField={props.addNewField} />
      </div>
   )
}


let mapStateToProps = (state) => ({
   product: getProdSelector(state)
})
export default compose(
   connect(mapStateToProps, { addNewField: addNewFieldTH }),

)(AddFieldContainer);

