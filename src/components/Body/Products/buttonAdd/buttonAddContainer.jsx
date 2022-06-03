import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './buttonAdd.module.scss';

const buttonAddContainer = (props) => {
   return (
      <div>
         <ButtonAdd />
      </div>
   )
}
let mapStateToProps = (state) => ({

})
export default compose(
   connect(mapStateToProps, {}),
)(buttonAddContainer);





////////////////////////////////////////////////////////////////////////
////              BUTTON ADD COMPONENT
////////////////////////////////////////////////////////////////////////







const ButtonAdd = (props) => {
   const [count, changeCount] = useState(0);

   const counter = (param = '-') => {
      if (param === '+') {
         changeCount(count + 1)
      } else {
         changeCount(count - 1)
      }

   }

   return (
      <div className={s.buttonAddBlock}>
         {count === 0 && <button onClick={() => counter('+')} className={s.buttonAdd}>В корзину</button>}
         {count > 0 &&
            <div className={s.countBlock}>
               <div><button onClick={() => counter('-')} className={s.buttonMinus}>-</button></div>
               <div className={s.count}>{count}</div>
               <div><button onClick={() => counter('+')} className={s.buttonPlus}>+</button></div>
            </div>
         }



      </div>
   )
}

