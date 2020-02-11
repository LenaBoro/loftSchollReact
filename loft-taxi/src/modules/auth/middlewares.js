//fetch
import {fetchLogin, fetchLoginFail, fetchSingIn, fetchLoginSuccess} from './actions';

// /auth login
const fetchLoginUserMiddlewear = store => next => action => {
    if (action.type === fetchLogin.toString()) {

        fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: action.payload.emailUser,
                    password: action.payload.passwordUser,
                })
        })
            .then(response => response.json())
            .then((success) => {
                // store.dispatch(fetchLoginSuccess(true));
                console.log('success login', success);

            })
            .catch((error) => {
                console.log(error);
                store.dispatch(fetchLoginFail(error));
            });
        return next(action)
    }
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
            })
            .catch((error) => {
                console.log('data is wrong, try again', error)
            });
        return next(action)
    }
    return next(action)
};
export default [fetchLoginUserMiddlewear];