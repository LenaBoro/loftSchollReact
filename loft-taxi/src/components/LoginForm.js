import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import Context from '../context/Context';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import '../scss/Login.scss';

// form
function LoginForm(props) {
    const context = useContext(Context);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleEmailChange = event => {
        setUserEmail(event.target.value);
    };
    const handlePasswordChange = event => {
        setUserPassword(event.target.value);
    };

    const handlerSubmitForm = e => {
        e.preventDefault();
        context.login(userEmail.email, userPassword.password);
    };
    return (
        <div className="container">
            <div className="login__content">
                <img src="./../img/logo.svg" alt="logo"/>

                <div className="login__block--white">
                    <h1 className="login__title">Войти</h1>
                    <p>Новый пользователь? <a className="link link__singin" href="#">зарегистрируйтесь</a></p>

                    <form className="login__form" onSubmit={handlerSubmitForm}>
                        <div className="container-flex">
                            <TextField
                                required
                                id="filled-required"
                                label="Имя пользователя"
                                name='userEmail'
                                type="text"
                                value={userEmail}
                                onChange={handleEmailChange}/>
                            <TextField
                                required
                                id="filled-required"
                                label="Пароль*"
                                name='userPassword'
                                type="password"
                                value={userPassword}
                                onChange={handlePasswordChange}
                            />
                        </div>


                        <Button variant="contained" color="primary" type="submit"
                                value="SUBMIT">
                            Войти
                        </Button>
                    </form>
                </div>

            </div>


        </div>)
    LoginForm.propTypes = {
        props: PropTypes.func
    };
}

export default LoginForm;