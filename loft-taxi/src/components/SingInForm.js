import React, {useState} from "react";
import PropTypes from "prop-types";
import '../Login.scss';
import Login from "./Login";

//form

function SingInForm(props){
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleEmailChange = event => {
        setUserEmail(event.target.value );
    };
    const handlePasswordChange = event => {
        setUserPassword(event.target.value );
    };
    return (

        <form onSubmit={props.onSubmit}>
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
            <input type="submit" value="Submit" />
        </form>
    );
}

SingInForm.propTypes = {
    props: PropTypes.func
};
export default SingInForm;