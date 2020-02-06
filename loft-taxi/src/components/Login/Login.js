import React from "react";
import LoginForm from './LoginForm';
import LogoBlack from'../Logo/LogoBlack'
//style
import '../../scss/Login.scss';


let Login = () => {
    return (
        <div className="pages login">
            <LogoBlack/>
            <LoginForm/>
        </div>
    )
}
export default Login;
