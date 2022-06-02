
import s from './MainMenu.module.css';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = (props) => {

   const active = nav => nav.isActive ? s.active : s.link
   
   return (
      <div>
         <div className={s.menu}>
            <div>
               Menu:
            </div>
            <div className={s.links}>
               <NavLink className={active} to='/1'>1</NavLink>
               <NavLink className={active} to='/2'>2</NavLink>
               <NavLink className={active} to='/'>Home</NavLink>
            </div>
         </div>
      </div>
   )
}






export default MainMenu;