import {createAction} from 'redux-actions';
//

//login auth
export const fetchLogin = createAction(
    'LOGIN',
    (emailUser, passwordUser) => ({ emailUser, passwordUser})
);
//login auth success
export const fetchLoginSuccess = createAction(
    'LOGIN_SUCCESS',
    (isLoggedIn) => (isLoggedIn)
);
//login auth fail
export const fetchLoginFail = createAction(
    'LOGIN_FAIL',
    (error) => (error)
);
//registration sing in
export const fetchSingIn = createAction(
    'SING_IN',
    (emailUser, name, surname, passwordUser) => ({emailUser, name, surname, passwordUser})
);

//login auth
export const fetchLogout = createAction(
    'LOGOUT',
    (isLoggedIn,emailUser, passwordUser) => ({isLoggedIn,emailUser, passwordUser})
)