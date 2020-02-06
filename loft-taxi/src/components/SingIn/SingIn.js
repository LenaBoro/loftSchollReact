import React from "react";
import PropTypes from "prop-types";
import SingInForm from './SingInForm'

//style
import '../../scss/SingIn.scss';

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
