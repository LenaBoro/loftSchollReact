//fetch
import {fetchLogin} from './actions';

export const fetchLoginUserMiddlewear = store => next => action => {
    if (action.type === fetchLogin) {
        fetch('https://loft-taxi.glitch.me/auth', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: 'test19@gmail.com',
                    surname: 'test',
                    name: 'test',
                    password: 'test19'
                })
        })
            .then(response => response.json())
            .then((success) => {
                success
                    ? (store.dispatch({type: 'LOGIN'})
                    && history.push('/profile'))
                    : (alert('user not found'))
            })
            .catch((error) => {
                alert('data is wrong, try again')
            })
        return next
    }


};