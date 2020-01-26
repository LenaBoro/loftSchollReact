import React, {useState} from "react";
import PropTypes from "prop-types";
import LoginForm from './LoginForm';
//style
import '../scss/Login.scss';


// page
function Login(props) {
    return (
        <div className="pages login">
            <LoginForm />
        </div>
    );
}

Login.propTypes = {
    props: PropTypes.func
};

export default Login;
