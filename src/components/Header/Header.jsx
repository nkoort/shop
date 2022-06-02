import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import MainMenu from './MainMenu/MainMenu';
import AdminMenu from './AdminMenu/AdminMenu';



const Header = (props) => {

   


   return (
      <div className={s.header}>
         <MainMenu />
         <AdminMenu isAuth={props.isAuth}/>
      </div>

   );
};



export default Header;