
import s from './AdminMenu.module.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = (props) => {
   const [adminMenu, adminMenuChange] = useState(false);


   const menuToggle = () => {
      if (adminMenu === false) {
         adminMenuChange (true)
      } else {
         adminMenuChange (false)
      };
   };
   
   

   return (
      <div>
         
         <div className={s.adminMenuBlock}>
            <div>
               <span onClick={menuToggle} className={s.menuLink}>
                  Меню пользователя
               </span>
               {adminMenu && 
               <div>
                  <div className={s.adminMenu}>
                     {props.isAuth && <NavLink to='/login'>Профиль</NavLink>}
                     {!props.isAuth && <NavLink to='/login'>Авторизация</NavLink>}
                     <NavLink to='/editproduct'>Добавить продукт</NavLink>
                     <NavLink to='/product-list'>Список продуктов</NavLink>
                  </div>
                  <div onClick={menuToggle} className={s.shadowBlock}></div>
               </div>
               }
            </div>
         </div>
      </div>
   )
}






export default AdminMenu;