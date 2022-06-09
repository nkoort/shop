import { Route, Routes, Router } from 'react-router-dom'
import { Suspense, lazy, Component, useEffect } from 'react'
import { connect } from 'react-redux'
import HeaderContainer from './components/Header/HeaderContainer'
import BodyContainer from './components/Body/BodyContainer'
import Footer from './components/Footer/Footer'
import s from './App.module.css'
import { examAuthTH } from './Redux/auth-reducer'

const App = (props) => {
  useEffect(() => {
    props.examAuth()
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <HeaderContainer />
      </div>
      <div className={s.body}>
        {props.isAuth !== null && <BodyContainer />}
        {props.isAuth == null && <div>Инициализация приложения....</div>}
      </div>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
  examAuth: examAuthTH,
})(App)
