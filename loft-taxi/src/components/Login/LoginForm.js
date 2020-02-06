import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";
import {fetchLogin} from "./../auth/actions";
//style
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../../scss/Login.scss';

// form
const LoginForm = () => {
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handlePasswordChange = event => {
        setPasswordUser(event.target.value);
    };
    const handleEmailChange = event => {
        setEmailUser(event.target.value);
    };

    //fetch server
    const handlerSubmitForm = e => {
        e.preventDefault();
        dispatch(fetchLogin(emailUser,passwordUser))
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
                        id="standard-basic"
                        label="Email"></TextField>
                    <TextField
                        onChange={handlePasswordChange}
                        type="password"
                        id="standard-basic"
                        label="Password"></TextField>
                    <Button type="submit">Войти</Button>
                </form>
            </div>
        </div>
    )
};

export default LoginForm
