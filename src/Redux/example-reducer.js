import {
   loginAPI,
   profileAPI
} from "../api/api";
import {
   stopSubmit
} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_PROFILE_ME = "auth/SET_USER_PROFILE_ME";
const SET_LOG = "auth/SET_LOG";
const SET_AUTORIZA_USER_DATA = "auth/SET_AUTORIZA_USER_DATA";
const SET_PROFILE_ME = "auth/SET_PROFILE_ME";

let initialState = {
   id: null,
   login: null,
   profileMe: null,
   isAuth: false,
   profile: null,
   

};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
               isAuth: true,
         };
      case SET_USER_PROFILE_ME:
         return {
            ...state,
            profileMe: action.profileMe,
               isAuth: true,
         };
      case SET_LOG:
         return {
            ...state,
            isAuth: action.isAuth,
         };
      case SET_AUTORIZA_USER_DATA:
         return {
            ...state,
            isAuth: true,
               profileMe: action.profileUser,
         };
      case SET_PROFILE_ME:
         return {
            ...state,
            profile: action.profileMeData,
         }
         default:
            return state;
   }
};
export const setAuthUserData = ({
   id
}) => ({
   type: SET_USER_DATA,
   data: {
      id,
   },
});

export const setUserProfile = (profileMe) => ({
   type: SET_USER_PROFILE_ME,
   profileMe,
});

export const setProfileMe = (profileMeData) => ({
   type: SET_PROFILE_ME,
   profileMeData,
})


export const authMeData = () => async dispatch => {
   let response = await profileAPI.authMe();
   if (response.data.resultCode === 0) {
      
      dispatch(setUserProfile(response.data.data));
      let responseMe = await profileAPI.getProfile(response.data.data.id)
      dispatch(setProfileMe(responseMe.data))
   }
};

export const logOutAC = (isAuth) => ({
   type: SET_LOG,
   isAuth,
});

// export const authMeTH = () => async dispatch => {
//   let responseMe = await profileAPI.authMe();
//   // if (responseMe.dataa.resultCode === 0) {
//   //   let {id,email,login} = responseMe.data.data;
//   //   dispatch(setAuthUserData({id,email,login}));
//   //   let responseProfile = await profileAPI.getProfile(id);
//   //   dispatch(setUserProfile(responseProfile.dat));
//   // }
// };


export const logOutTH = (isAuth) => async dispatch => {
   let response = await loginAPI.logout();
   dispatch(logOutAC(isAuth));
};
// export const logInTHn = (emailUser, passwordUser, rememberMeUser, isAuth) => {
//     return (dispatch) => {
//         loginAPI.login(emailUser, passwordUser, rememberMeUser).then(response => {
//             if (response.data.resultCode === 0) {
//               profileAPI.authMe().then((response) => {
//                 if (response.data.resultCode === 0) {
//                   let { id, email, login } = response.data.data;
//                   dispatch(
//                     setAuthUserData({id,email,login,})
//                   );
//                   profileAPI.getProfile(id).then((response) => {
//                     dispatch(setUserProfile(response.data));
//                   });
//                   dispatch(logOutAC(isAuth));
//                 }
//               })} else {
//                 let message = response.data.messages.length > 0 ? response.data.messages : 'Some error';
//                 dispatch(stopSubmit('login', {_error: message}));
//               }
//         })

//     }
// }

export const logInTH = (emailUser, passwordUser, rememberMeUser) => async dispatch => {
   let response = await loginAPI.login(emailUser, passwordUser, rememberMeUser);
   if (response.data.resultCode === 0) {
      dispatch(authMeData());
   } else {
      let message = response.data.messages.length > 0 ? response.data.messages : "Some error";
      dispatch(stopSubmit("login", {
         _error: message
      }));
   }
}



export default authReducer;