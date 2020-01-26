import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import Context from '../context/Context'
import '../Login.scss';

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
        <form onSubmit={handlerSubmitForm}>
            <label>
                Email
                <input
                    name='userEmail'
                    type="text"
                    value={userEmail}
                    onChange={handleEmailChange}
                />
            </label>
            <label>
                Password:
                <input
                    name='userPassword'
                    type="password"
                    value={userPassword}
                    onChange={handlePasswordChange}
                />
            </label>
            <input type="submit" value="SUBMIT"/>
        </form>
    )
    LoginForm.propTypes = {
        props: PropTypes.func
    };
}

export default LoginForm;