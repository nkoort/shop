import s from './MainContent.module.css';
import React, {useStatus, useEffect} from "react";
import { connect } from 'react-redux';
import {useMatch ,Navigate} from "react-router-dom";
import { compose } from 'redux';


const ContentContainer = (props) => {
   let [useStatusHook, useStatusChangeFunction] = useStatus('some status');

   useEffect ( () => {
         //Какие-то ф-ции.
   }, [])
   
   useMatch();

   return (
      <div>
         Content
      </div>
   )
}


let mapStateToProps = (state) => ({
  //some state
  // proifle: state.profile.user // как пример, в идеале всё сразу делать через селекторы и реселект.

})
  export default compose ( //compose принимает все функции вложенные в него и выполняет их последовательно, можно делать сценарии провери логинизации т.д., не обязательно пока
    
    connect ( mapStateToProps, {}), // внутри {} располагаются редьюсеры, в формате названия или ключ-редусер, getPrfile: getProfileThunk.
    // withAuthRedirect,
    
  ) (ContentContainer);

