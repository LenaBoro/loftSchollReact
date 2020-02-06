import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";
import {fetchSingIn} from "../../modules/auth/actions";
//style
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../../scss/SingIn.scss';

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
        dispatch(fetchSingIn(nameUser, emailUser, passwordUser, surnameUser))
    }
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


