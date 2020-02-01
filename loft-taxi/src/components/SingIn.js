import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import '../scss/SingIn.scss';
import SingInForm from './SingInForm'

//
function SingIn() {
    return (
        <div>
            <h1 className="h1">Sign in</h1>
            <SingInForm/>
        </div>
    );
}
SingIn.propTypes = {
    props: PropTypes.func
};

export default SingIn;
