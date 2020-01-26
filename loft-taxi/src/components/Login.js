import React, {useState} from "react";
import PropTypes from "prop-types";

import '../Login.scss';
import LoginForm from './LoginForm';


// page
function Login(props) {
    return (
        <div className="Login">
            <h1 className="h1">Login page</h1>
            {/*< <LoginForm {...props}/> >*/}
            <LoginForm />
        </div>
    );
}

Login.propTypes = {
    props: PropTypes.func
};

export default Login;
