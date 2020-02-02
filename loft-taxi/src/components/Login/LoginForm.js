import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../../scss/Login.scss';
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";

// form
function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handlerSubmitForm = e => {
        e.preventDefault();

        dispatch({type: 'LOGIN'});
        history.push('/profile')
    };
    return (
        <div className="container">
            <form action="post" onSubmit={handlerSubmitForm}>
                <TextField
                    id="standard-basic"
                    label="Имя"></TextField>
                <TextField
                    type="password"
                    id="standard-basic"
                    label="Пароль"></TextField>
                <Button type="submit">Войти</Button>
            </form>
        </div>
    )

}

export default LoginForm;


