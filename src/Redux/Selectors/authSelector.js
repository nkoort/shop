import { createSelector } from 'reselect'

export const getIsAuth = (state) => {
  return state.auth.isAuth
}

export const getAuth = (state) => {
  return state.auth
}

export const getProfileMain = (state) => {
  return state.auth.auth
}
// export const getProfileInfo = (state) => {
//   return state.auth.auth.providerData[0]
// }
