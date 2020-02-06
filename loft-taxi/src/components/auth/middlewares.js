//fetch

import {fetchLogin} from './actions';

export const fetchLoginUserMiddlewear = store => next => action => {

    if (action.type === fetchLogin.toString()) {

        fetch('https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: 'test@gmail.com',
                    surname: 'test',
                    name: '',
                    password: '23'
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