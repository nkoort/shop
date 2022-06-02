import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { authTH, logOutTH } from "../../../Redux/auth-reducer";
import PreloaderBig from "../../../utils/Preloader";
import Login from "./Login";
import s from './Login.module.css';

const LoginContainer = (props) => {
   let [status, statusChange] = useState(props.isAuth);


   const onSubmit = (formData) => {
      props.auth(formData.email, formData.password)
      statusChange(true)
   }

   const click = (value) => {
      props.logout();
      statusChange(false)
   };


   <div className={s.login}>
      <div>
         Profile: {props.profile.uid}
         <div>
            Email: {props.profile.email}
         </div>
         <button onClick={click}>
            Log Out
         </button>
      </div>
   </div>


   if (props.isAuth === false && status === true) {
      return <PreloaderBig />
   } else if (props.isAuth === false && status === false) {
      return (
         <div className={s.login}>
            <Login onSubmit={onSubmit} />
         </div>
      )
   } else {
      return (
         <div className={s.login}>
            <div>
               Profile: {props.profile.uid}
               <div>
                  Email: {props.profile.email}
               </div>
               <button onClick={click}>
                  Log Out
               </button>
            </div>
         </div>
      )
   }
}






let mapStateToProps = (state) => ({
   profile: state.auth.auth,
   isAuth: state.auth.isAuth,
})
export default compose(
   connect(mapStateToProps, { auth: authTH, logout: logOutTH }),

)(LoginContainer);

