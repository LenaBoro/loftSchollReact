//fetch
import {fetchLogin, fetchLoginFail, fetchSingIn, fetchLogout, fetchLoginSuccess} from './actions';

// /auth login
export const fetchLoginUserMiddlewear = store => next => action => {
    if (action.type === 'LOGIN') {
        fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: action.payload.emailUser,
                    password: action.payload.passwordUser
                })
        })
            .then(response => response.json())
            .then((success) => {
                console.log('success login', success);
                store.dispatch(fetchLoginSuccess);
            })
            .catch((error) => {
                console.log(error);
                store.dispatch(fetchLoginFail(error));
            });
        return next(action)
    }
};
// /registration sing in
export const fetchSingInUserMiddlewear = store => next => action => {

    if (action.type === fetchSingIn.toString()) {
        fetch('https://loft-taxi.glitch.me/registration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: action.payload.emailUser,
                    surname: action.payload.surnameUser,
                    name: action.payload.nameUser,
                    password: action.payload.passwordUser
                })
        })
            .then(response => response.json())
            .then((success) => {
                console.log('success sing in', success)
                localStorage.setItem('emailUser', action.payload.emailUser);
                localStorage.setItem('passwordUser', action.payload.passwordUser);
                localStorage.setItem('userToken', success.token);
            })
            .catch((error) => {
                console.log('data is wrong, try again', error)
            });
        return next(action)
    }
};

// logout
export const logoutMiddlewear = store => next => action => {

    if (action.type === fetchLogout.toString()) {

    }
    return next(action)
}