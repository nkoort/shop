import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './buttonAdd.module.scss';
import { cloneDeep } from 'lodash'
import { addToCartTH } from "../../../../Redux/cart-reducer";

const buttonAddContainer = ({ product, cart, addToCart }) => {
   return (
      <div>
         <ButtonAdd product={product} cart={cart} addToCart={addToCart} />
      </div>
   )
}
let mapStateToProps = (state) => ({
   cart: state.cart,
})
export default compose(
   connect(mapStateToProps, { addToCart: addToCartTH }),
)(buttonAddContainer);

////////////////////////////////////////////////////////////////////////
////              BUTTON ADD COMPONENT
////////////////////////////////////////////////////////////////////////

const ButtonAdd = ({ product, cart, addToCart }) => {

   const [count, changeCount] = useState(0);
   let id = product.id
   useEffect(() => {
      if (cart[id]) {
         changeCount(cart[id].count)
      }
   }, [])

   const addPruductToCart = (param) => {
      if (param === '+') {
         changeCount(count + 1)
      } else {
         changeCount(count - 1)
      }
      const newProduct = cloneDeep(product)
      newProduct.count = param === '+' ? count + 1 : count - 1;
      addToCart(newProduct);
   }

   return (
      <div className={s.buttonAddBlock}>
         {count === 0 && <button onClick={() => addPruductToCart('+')} className={s.buttonAdd}>В корзину</button>}
         {count > 0 &&
            <div className={s.countBlock}>
               <div><button onClick={() => addPruductToCart('-')} className={s.buttonMinus}>-</button></div>
               <div className={s.count}>{count}</div>
               <div><button onClick={() => addPruductToCart('+')} className={s.buttonPlus}>+</button></div>
            </div>
         }



      </div>
   )
}

