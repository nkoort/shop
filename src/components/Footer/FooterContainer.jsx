import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import {useMatch ,Navigate} from "react-router-dom";
import { compose } from 'redux';
import Footer from './Footer';


const FooterContainer = (props) => {
   let [useStatusHook, useStatusChangeFunction] = useState('some status');

   // useEffect ( () => {
   // }, [])
   
   // useMatch();

   return (
      <div>
         <Footer />
      </div>
   )
}


let mapStateToProps = (state) => ({
})
  export default compose (
    connect ( mapStateToProps, {}),
    
  ) (FooterContainer);

