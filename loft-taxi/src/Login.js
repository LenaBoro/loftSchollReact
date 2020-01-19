import React, {useState} from "react";
import './Login.scss';
// page
function Login() {
    return (
        <div className="Login">
            <h1 className="h1">Login page</h1>
            <LoginForm/>
        </div>
    );
}

export default Login;

// form
function LoginForm(props){
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