import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";
import {fetchLogin} from "./../../modules/auth/actions";
//style
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../../scss/Login.scss';

// form
const LoginForm = () => {
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const dispatch = useDispatch();

    const handlePasswordChange = event => {
        setPasswordUser(event.target.value);
    };
    const handleEmailChange = event => {
        setEmailUser(event.target.value);
    };
    useEffect(() => {
        return console.log(localStorage.getItem('emailUser'))
    });

    //fetch server
    const handlerSubmitForm = e => {
        e.preventDefault();
        dispatch(fetchLogin(emailUser, passwordUser))
    };

    return (
        <div className="container">
            <div className="login__block--white">
                <h1 className="login__title">Войти</h1>
                <p>Новый пользователь? <a className="link link__singin" href="/singin">зарегистрируйтесь</a></p>

                <form action="post" onSubmit={handlerSubmitForm}>
                    <TextField
                        onChange={handleEmailChange}
                        type="email"
                        required
                        id="filled-required"
                        label="Имя пользователя"
                        name='userEmail'
                        value={emailUser}></TextField>
                    <TextField
                        required
                        id="filled-required"
                        label="Пароль*"
                        name='userPassword'
                        type="password"
                        value={passwordUser}
                        onChange={handlePasswordChange}>
                    </TextField>
                    <Button variant="contained" color="primary" type="submit"
                            value="SUBMIT">
                        Войти
                    </Button>
                </form>
            </div>
        </div>
    )
};

export default LoginForm
