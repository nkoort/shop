import s from './Cart.module.scss'

import { connect } from 'react-redux'
import { compose } from 'redux'
import React, { useEffect, useState } from 'react'
import ButtonAddContainer from '../Products/buttonAdd/buttonAddContainer'

const CartContainer = ({ cart }) => {

   return (
      <div>
         <Cart cart={cart} />
      </div>
   )
}
let mapStateToProps = (state) => ({
   cart: state.cart,
})
export default compose(connect(
   mapStateToProps,
   {}),
)(CartContainer);

///////////////////////////////////////////////////////////////////////////////////
//          BUCKET COMPONENT
//////////////////////////////////////////////////////////////////////////////////

const Cart = ({ cart }) => {

   const [total, changeTotal] = useState(0);

   const summTotal = () => {
      let arr = Object.keys(cart).map(key => {
         let a = Number(cart[key].count) * Number(cart[key].price)
         return a
      })
      let result = arr.reduce(function (sum, elem) {
         return sum + elem;
      }, 0);
      changeTotal(result)
   }
   useEffect(() => {
      summTotal()
   }, [cart])
   debugger

   const cartItems = Object.keys(cart).map(key => {
      if (cart[key].id !== 0) {
         return (
            <div className={s.item}>
               <div className={s.info}>
                  <span className={s.infoName}>Название:</span><span className={s.infoValue}>{cart[key].name}</span>
                  <span className={s.infoName}>Категория:</span><span className={s.infoValue}>{cart[key].category}</span>
                  <span className={s.infoName}>Цена:</span><span className={s.infoValue}>{cart[key].price}</span>
               </div>
               <div className={s.button}>
                  <ButtonAddContainer product={cart[key]} />
               </div>
               <div className={s.summBlock}>
                  <div className={s.summTitle}>Всего:</div>
                  <div className={s.summValue} >{Number(cart[key].count) * Number(cart[key].price)}</div>
               </div>
            </div>
         )
      }

   })

   if (Object.keys(cart).length == 0) {
      return <div>Корзина пока пустая...</div>
   }
   return (
      <div className={s.cartBlock}>
         <div>{cartItems}</div>
         <div className={s.cartTotal}>
            <div className={s.cartTotalTitle}>
               Общий итог:
            </div>
            <div className={s.cartTotalValue}>
               {total}
            </div>
         </div>
      </div>
   )
}













