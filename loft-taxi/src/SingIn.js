import React, {useState, useEffect} from "react";
import './SingIn.scss'

//
function SingIn(props) {
    return (
        <div>
            <h1 className="h1">Sign in</h1>
            <LoginSingIn  onSubmit={props.handlerSubmitForm}/>
        </div>
    );
}

export default SingIn;

//form
function LoginSingIn(props){
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