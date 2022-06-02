import s from './Header.module.css';
import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import {useMatch ,Navigate} from "react-router-dom";
import { compose } from 'redux';
import Header from './Header';


const HeaderContainer = (props) => {
   let [useStatusHook, useStatusChangeFunction] = useState('some status');

   // useEffect ( () => {
   // }, [])
   
   // useMatch();

   return (
      <div>
         <Header isAuth={props.isAuth}/>
      </div>
   )
}


let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
})
  export default compose (
    connect ( mapStateToProps, {}), 
    
  ) (HeaderContainer);

