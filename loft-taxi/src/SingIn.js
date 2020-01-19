import React, {useState, useEffect} from "react";
import './SingIn.scss'
import App from './App'

//
function SingIn(props) {
    return (
        <div>
            <h1 className="h1">Sign in</h1>
            <LoginSingIn  />
        </div>
    );
}

export default SingIn;

//form
function LoginSingIn(props){
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('submit')
    };
    const handleEmailChange = event => {
        setUserEmail(event.target.value );
    };
    const handlePasswordChange = event => {
        setUserPassword(event.target.value );
    };
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    email
                    <input
                        name='userEmail'
                        type="text"
                        value={userEmail}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    password:
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