import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../scss/SingIn.scss';
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";

// form
function SingInFrom() {
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

        fetch('https://loft-taxi.glitch.me/registration', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: emailUser,
                    surname: surnameUser,
                    name: nameUser,
                    password: passwordUser
                })
        })
            .then(response => response.json())
            .then((success) => {
                success ? (
                    dispatch({type: 'SING_IN'}) && history.push('/profile')) : (alert('data is wrong'))
            })
            .catch((error) => {
                alert('data is wrong, try again')
            })
    };
    return (
        <div className="container">

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
    )

}

export default SingInFrom;


