import {createAction} from 'redux-actions';


export const fetchLogin = createAction('LOGIN');
export const fetchLogout = createAction('LOGOUT');
//sing in
export const fetchSingIn = createAction('SING_IN');