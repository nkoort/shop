import {
    createSelector
} from 'reselect';


export const getIsAuth = (state) => {
    return state.auth.isAuth;
};

export const getAuth = (state) => {
    return state.auth
};