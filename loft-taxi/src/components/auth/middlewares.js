//fetch

import {fetchLogin, fetchSingIn} from './actions';

export const fetchLoginUserMiddlewear = store => next => action => {

    if (action.type === fetchLogin.toString()) {
        console.log(action.payload)
        fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: action.payload,
                    password: 'password'
                })
        })
            .then(response => response.json())
            .then((success) => {
                //store.dispatch({type: 'LOGIN'})
                console.log('success', success)

            })
            .catch((error) => {
                console.log('data is wrong, try again',error)
            });
        return (next)
     }
};

export const fetchSingInUserMiddlewear = store => next => action => {

    if (action.type === fetchLogin.toString()) {

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
                //store.dispatch({type: 'LOGIN'})
                console.log('success', success)

            })
            .catch((error) => {
                console.log('data is wrong, try again',error)
            });
        return (next)
    }
};