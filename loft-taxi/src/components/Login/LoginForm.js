import React, {useState, useContext, useEffect} from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../../scss/Login.scss';
import {connect, useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";
import {fetchLogin} from "./../auth/actions";

// form
const LoginForm = () => {
    const [nameUser, setNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const [surnameUser, setSurnameUser] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleNameChange = event => {
        setNameUser(event.target.value);
    };
    const handlePasswordChange = event => {
        setPasswordUser(event.target.value);
    };
    const handleEmailChange = event => {
        setEmailUser(event.target.value);
    };
    const handleSurnameChange = event => {
        setSurnameUser(event.target.value);
    };

    //fetch server
    const handlerSubmitForm = e => {
        e.preventDefault();
        dispatch(fetchLogin(123))
    };

    return (
        <div className="container">
            <div className="login__block--white">
                <h1 className="login__title">Войти</h1>
                <p>Новый пользователь? <a className="link link__singin" href="/singin">зарегистрируйтесь</a></p>

                <form action="post" onSubmit={handlerSubmitForm}>
                    <TextField
                        onChange={handleNameChange}
                        id="standard-basic"
                        label="Name"></TextField>
                    <TextField
                        onChange={handleSurnameChange}
                        id="standard-basic"
                        label="Surname"></TextField>
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
// const mapStateToProps = state => state;
// const mapDispatchToProps = {fetchLogin};

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps)(LoginForm);

export default LoginForm
