import s from './Header.module.css';
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useMatch, Navigate, NavLink } from "react-router-dom";
import { compose } from 'redux';
// import Header from './Header';
import MainMenu from './MainMenu/MainMenu';
import AdminMenu from './AdminMenu/AdminMenu';
import BucketMenu from './BucketMenu/BucketMenu';



const HeaderContainer = (props) => {
   return (
      <div>
         <Header isAuth={props.isAuth} />
      </div>
   )
}


let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
})
export default compose(
   connect(mapStateToProps, {}),
)(HeaderContainer);


const Header = (props) => {

   return (
      <div className={s.header}>
         <AdminMenu isAuth={props.isAuth} />
         <BucketMenu />
      </div>

   );
};



