import {createAction} from 'redux-actions';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const fetchLogin = createAction(LOGIN);
export const fetchLogout = createAction(LOGOUT);