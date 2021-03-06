import store from './Redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './api/firebase/firebase'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
