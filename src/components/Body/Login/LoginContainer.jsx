import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { authAPI } from "../../../api/firebase/firebase";
import { authTH, logOutTH } from "../../../Redux/auth-reducer";
import { getProfileInfo, getProfileMain } from "../../../Redux/Selectors/authSelector";
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


   const addName = (name) => {
      authAPI.updateProfile('Some directory')
   }


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
               <div>
                  Name: {props.profile.displayName}
               </div>
               <div>
                  <button onClick={addName}>add new name</button>
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
   profile: getProfileMain(state),
   isAuth: state.auth.isAuth,
})
export default compose(
   connect(mapStateToProps, { auth: authTH, logout: logOutTH }),

)(LoginContainer);

